import { ConsoleApplication } from "./../../src/application/ConsoleApplication";
describe("ConsoleApplication", () => {
  it("should print 'Hello World!' to the console", () => {
    const app = new ConsoleApplication();
    const spy = jest.spyOn(console, "log");
    app.main();
    expect(spy).toHaveBeenCalledWith("Hello World!");
  });
});
