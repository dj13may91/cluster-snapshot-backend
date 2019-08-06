export class NotificationModel {
  type: number;
  message: string;

  public static readonly SUCCESS = 1;
  public static readonly ERROR = 2;
  public static readonly WARNING = 3;
  public static readonly INFO = 4;

  constructor(type: number, message: string) {
    this.type = type;
    this.message = message;
  }
}
