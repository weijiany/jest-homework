import axios from "axios";
import { register } from "../user";
import { verifyPassword, verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

const mockUsername = "mock username";
const mockPassword = "mock password";

describe("register", () => {
  test("should post user when validated", async () => {
    const data = "ok";

    axios.post.mockImplementationOnce(() => Promise.resolve({ data }));

    await expect(register(mockUsername, mockPassword)).resolves.toBe(data);
    expect(verifyUsername).toBeCalledWith(mockUsername);
    expect(verifyPassword).toBeCalledWith(mockPassword);
    expect(axios.post).toBeCalledWith("/user", {
      username: mockUsername,
      password: mockPassword,
    });
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockImplementation(() => false);

    const resp = register(mockUsername, mockPassword);
    await expect(resp).rejects.toThrowError("wrong username or password");
    expect(verifyUsername).toBeCalledWith(mockUsername);
  });
});
