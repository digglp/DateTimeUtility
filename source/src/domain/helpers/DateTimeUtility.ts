import moment from "moment-timezone";

export class DateTimeUtility {
  static toLocalTime(utcDateTime: string, timezoneIdentifier: string): string {
    const localDateTime = moment.utc(utcDateTime).tz(timezoneIdentifier).format("DD/MM/YYYY, HH:mm");
    return localDateTime;
  }

  static toUtcTime(localDateTime: string, timezoneIdentifier: string): string {
    const utcDateTime = moment.tz(localDateTime, "DD/MM/YYYY, HH:mm", timezoneIdentifier).utc().format();
    return utcDateTime;
  }
}
