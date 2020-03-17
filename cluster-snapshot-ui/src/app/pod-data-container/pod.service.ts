export class PodService {

  public namespace: string;
  public podName: string;
  public ready: string;
  public status: string;
  public restarts: number;
  public age: string;
  public ip: string;
  public node: string;
  public podMemory: string;
  public colour: string;
  public logs: string;
  public icon: string;
  public podCommand: string;
  public deleted: boolean;
  public podId;
  public hasLogs = false;

  constructor() {
  }

  static isReady(pod: PodService): boolean {
    const split = pod.ready.split('/');
    return split[0] === split[1];
  }
}
