import Recipient from "../recipient";

describe("acceptInjection", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    // TODO 17: add test here
    jest.doMock("../covid19Vaccine", () => {
      return jest.fn().mockImplementation(() => {
        return {
          composition: [],
        };
      });
    });

    const Covid19Vaccine = require("../covid19Vaccine");

    const recipient = new Recipient();

    recipient.acceptInjection(new Covid19Vaccine());
    expect(recipient.hasAntibodies).toBeFalsy();
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    // TODO 18: add test here
    jest.doMock("../covid19Vaccine", () => {
      return jest.fn().mockImplementation(() => {
        return {
          composition: ["Virus Proteins"],
        };
      });
    });
    const Covid19Vaccine = require("../covid19Vaccine");

    const recipient = new Recipient();

    recipient.acceptInjection(new Covid19Vaccine());
    expect(recipient.hasAntibodies).toBe(true);
  });
});
