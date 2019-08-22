package com.snapshot.cluster.WIP;

import com.google.common.io.ByteStreams;
import io.kubernetes.client.ApiClient;
import io.kubernetes.client.ApiException;
import io.kubernetes.client.Configuration;
import io.kubernetes.client.Exec;
import io.kubernetes.client.util.Config;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;

/**
 * A simple example of how to use the Java API
 *
 * <p>Easiest way to run this: mvn exec:java
 * -Dexec.mainClass="io.kubernetes.client.examples.ExecExample"
 *
 * <p>From inside $REPO_DIR/examples
 */
public class ExecExample {

  public static void main(String[] args)
      throws IOException, ApiException, InterruptedException, ParseException {
    final Options options = new Options();
    options.addOption(new Option("p", "pod", true, "The name of the pod"));
    options.addOption(new Option("n", "namespace", true, "The namespace of the pod"));

    CommandLineParser parser = new DefaultParser();
    CommandLine cmd = parser.parse(options, args);

    String podName = cmd.getOptionValue("p", "soar-rule-service-546979f96d-5c2jt");
    String namespace = cmd.getOptionValue("n", "soar");
//    List<String> commands = new ArrayList<>();
//
//    args = cmd.getArgs();
//    for (int i = 0; i < args.length; i++) {
//      commands.add(args[i]);
//    }

    ApiClient client = Config.defaultClient();
    Configuration.setDefaultApiClient(client);

    Exec exec = new Exec();
    boolean tty = System.console() != null;
     final Process proc = exec.exec(namespace, podName, new String[]{"sh", "-c", "ls"}, true, tty);
//    final Process proc =
//        exec.exec(namespace, podName,
//            commands.isEmpty() ? new String[]{"sh"} : commands.toArray(new String[commands.size()]),
//            true,
//            tty);

    Thread in = new Thread(() -> {
      try {
        ByteStreams.copy(System.in, proc.getOutputStream());
      } catch (IOException ex) {
        ex.printStackTrace();
      }
    });
    in.start();

    Thread out = new Thread(() -> {
      try {
        ByteStreams.copy(proc.getInputStream(), System.out);
      } catch (IOException ex) {
        ex.printStackTrace();
      }
    });
    out.start();

    proc.waitFor();

    // wait for any last output; no need to wait for input thread
    out.join();

    proc.destroy();

    System.exit(proc.exitValue());
  }
}
