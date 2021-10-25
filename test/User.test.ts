import { User } from "../src/User";
import * as E from "fp-ts/Either";

describe("User class", () => {
    const input = {
        email: "username@yahoo.com",
        firstname: "paolo",
        lastname: "manaois",
        age: 14
    };

    it("should create a valid User", () => {
        const eUser = User.build(input);
        expect(E.isRight(eUser));
    });

    it("should fail when email is invalid", () => {
        const eUser = User.build({ ...input, email: ".username@yahoo.com" });
        expect(E.isLeft(eUser));
    });

    it("should fail when firstname is empty", () => {
        const eUser = User.build({ ...input, firstname: "" });
        expect(E.isLeft(eUser));
    });
    
    it("should fail when lastname is empty", () => {
        const eUser = User.build({ ...input, lastname: "" });
        expect(E.isLeft(eUser));
    });

    
    it("should fail when User is underage", () => {
        const eUser = User.build({ ...input, age: 10 });
        expect(E.isLeft(eUser));
    });
});