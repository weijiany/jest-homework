import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    const data = "ok";

    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));

    const resp = getUsers();

    await expect(resp).resolves.toBe(data);
    expect(axios.get).toBeCalledTimes(1);
  });
});
