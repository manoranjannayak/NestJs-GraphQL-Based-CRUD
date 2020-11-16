import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class UserDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: String;

    @Field()
    @IsString()
    @IsNotEmpty()
    username: String;

    @Field()
    @IsString()
    @IsNotEmpty()
    email: String;

    @IsString()
    @IsNotEmpty()
    password: any;

    @Field(() => Int)
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @Field()
    @IsString()
    @IsNotEmpty()
    image: String;

    @Field()
    @IsString()
    @IsNotEmpty()
    image2: String;
}