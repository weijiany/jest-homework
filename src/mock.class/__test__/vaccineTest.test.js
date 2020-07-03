import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockGetHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();

    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    mockGetHasAntibodies.mockImplementation(() => true);

    const vaccineTest = new VaccineTest();

    vaccineTest.inject();
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    mockGetHasAntibodies.mockImplementation(() => false);

    const vaccineTest = new VaccineTest();

    vaccineTest.inject();
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
