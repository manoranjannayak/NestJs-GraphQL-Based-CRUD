import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@ObjectType()
export class UserDto {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsString()
    @IsNotEmpty()
    username: string;

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
    image2:String;
}