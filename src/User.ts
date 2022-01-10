import * as E from "fp-ts/Either";

export type InvalidUserMsg = string;

export class User {
    private static emailRegex = new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(\?\:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(\?\:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");

    private constructor(
        private email: string, 
        private firstname: string,
        private lastname: string,
        private age: number
    ) {}

    printHello(): void {
        console.log("Hello");
    }

    static build(input: {
        email: string,
        firstname: string,
        lastname: string,
        age: number
    }): E.Either<InvalidUserMsg, User> {

        if (!this.emailRegex.test(input.email)) {
            return E.left("Invalid email");
        }
        if (input.firstname.length === 0 || input.lastname.length === 0) {
            return E.left("Missing Firstname and/or Lastname");
        }
        if (input.age <= 13) {
            return E.left("Too young");
        }

        return E.right(new User(
            input.email, 
            input.firstname, 
            input.lastname, 
            input.age
        ));
    }
}