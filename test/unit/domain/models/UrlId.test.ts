import { UrlIdTooShortError } from "../../../../src/domain/models/errors/UrlIdTooShortError";
import { UrlId } from "../../../../src/domain/models/UrlId";

describe("UrlId Test", () => {
    it("should create an instance of UrlId class", () => {
        expect(new UrlId("123456qwerty")).toBeInstanceOf(UrlId);
    });
    it("should throw an Error if the urlId has less than 10 chars", () => {
        expect(() => new UrlId("12345")).toThrow(UrlIdTooShortError);
    });
    it("should return a string representation on the toString method", () => {
        expect(new UrlId("123456qwerty").toString()).toBe("123456qwerty");
    });
});
