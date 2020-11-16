import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class UserInput {
    @Field()
    name: String;

    @Field()
    username: String;

    @Field()
    email: String;

    @Field()
    password: String;

    @Field()
    age: number;

    @Field()
    image: String;

    @Field()
    image2: String;
}