export class NotificationModel {
  public static readonly SUCCESS = 1;
  public static readonly ERROR = 2;
  public static readonly WARNING = 3;
  public static readonly INFO = 4;

  type: number;
  message: string;

  constructor(type: number, message: string) {
    this.type = type;
    this.message = message;
  }
}
