import { InputType, Field, Int, ID } from '@nestjs/graphql';

@InputType()
export class UserInput {
    @Field()
    name: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    age: number;

    @Field()
    image: string;

    @Field()
    image2:string;
}