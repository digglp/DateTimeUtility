import { DateTimeUtility } from "../domain/helpers/DateTimeUtility";

export class ConsoleApplication {
  public main() {
    console.log("Hello World!");
    const utcDate = new Date().toISOString();

    console.log("utc Date: ", utcDate);
    console.log("local Date: " + DateTimeUtility.toLocalTime(utcDate, "Europe/London"));
  }
}

const app = new ConsoleApplication();
app.main();
