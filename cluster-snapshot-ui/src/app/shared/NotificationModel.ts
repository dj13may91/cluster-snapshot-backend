export class NotificationModel {
  public static readonly SUCCESS = 1;
  public static readonly ERROR = 2;
  public static readonly WARNING = 3;
  public static readonly INFO = 4;

  type: number;
  message: string;
  date = new Date();

  constructor(type: number, message: string) {
    this.type = type;
    this.message = message;
  }

  getTime() {
    let age = (new Date().getTime() - this.date.getTime()) / 1000;
    let duration = '1 sec';
    if (age >= (60 * 60 * 24)) {
      age = age / (60 * 60 * 24);
      duration = age.toFixed(0) + ' day';
    } else if (age >= (60 * 60)) {
      age = age / 3600;
      duration = age.toFixed(0) + ' hr';
    } else if (age >= 60) {
      age = age / 60;
      duration = age.toFixed(0) + ' min';
    } else {
      duration = '< 1 min';
    }

    return duration;
  }
}
