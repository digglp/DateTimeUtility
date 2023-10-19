import { advanceTo, clear } from "jest-date-mock";

import { DateTimeUtility } from "./../../../src/domain/helpers/DateTimeUtility";
import timezoneMock from "timezone-mock";

describe("DateTimeUtility Test Suit", () => {
  describe("toLocalTime", () => {
    beforeEach(() => {
      timezoneMock.register("UTC");
    });

    afterEach(() => {
      //jest.useRealTimers();
      timezoneMock.unregister();
      clear();
    });

    it("should get local time in BST", () => {
      const bstDate = new Date(2023, 7, 1, 10, 20, 30);
      advanceTo(new Date(bstDate));

      const localTime = DateTimeUtility.toLocalTime(bstDate.toISOString(), "Europe/London");
      expect(localTime).toEqual("01/08/2023, 11:20");
    });
    it("should get local time in GMT", () => {
      const gmtDate = new Date(2023, 0, 1, 10, 20, 30);
      advanceTo(new Date(gmtDate)); //GMT

      const localTime = DateTimeUtility.toLocalTime(gmtDate.toISOString(), "Europe/London");
      expect(localTime).toEqual("01/01/2023, 10:20");
    });
  });
  describe("toUtcTime", () => {
    beforeEach(() => {
      timezoneMock.register("Europe/London");
    });

    afterEach(() => {
      //jest.useRealTimers();
      timezoneMock.unregister();
      clear();
    });

    it("should get utc time in BST", () => {
      const bstDate = new Date(2023, 7, 1, 10, 20, 30);
      advanceTo(new Date(bstDate));

      const utcTime = DateTimeUtility.toUtcTime("01/08/2023, 11:20", "Europe/London");
      expect(utcTime).toEqual("2023-08-01T10:20:00Z");
    });
    it("should get utc time in GMT", () => {
      const gmtDate = new Date(2023, 0, 1, 10, 20, 30);
      advanceTo(new Date(gmtDate)); //GMT

      const utcTime = DateTimeUtility.toUtcTime("01/01/2023, 10:20", "Europe/London");
      expect(utcTime).toEqual("2023-01-01T10:20:00Z");
    });
  });
});
