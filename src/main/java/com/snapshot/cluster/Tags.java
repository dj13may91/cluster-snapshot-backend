package com.snapshot.cluster;

public class Tags {
    public static final String
            Watch = "<i class='material-icons'>watch</i>",
            BalanceScale = "<i class='fa fa-balance-scale'></i>",
            RightArrow = "<i class='fa fa-arrow-right'></i>",
            MemoryNotFound = "<i class='fa fa-battery-0'></i>",
            LowMemoryUsage = "<i class='fa fa-battery-1' style='color: green'></i>",
            MediumMemoryUsage = "<i class='fa fa-battery-2' style='color: orange'></i>",
            HighMemoryUsage = "<i class='fa fa-battery-4' style='color: red'></i>",
            Restarts = "<i class='fa fa-undo'></i>",
            CrashLoopBackOff = "<i class='fa fa-refresh fa-spin fa-fw'></i>",
            MapIcon = "<i class='fa fa-map'></i>";

//    public static String createIngressIpLink(ClusterDetails details) {
//        return "<h3>" + Tags.BalanceScale + "Ingress ip : <a target='_blank' href='https://" +
//                details.ingressIp + "' style='color:hotpink' >" + details.ingressIp + "</a></h3>";
//    }
}
