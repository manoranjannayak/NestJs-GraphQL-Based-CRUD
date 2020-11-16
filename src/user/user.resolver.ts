import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserInput } from './user.input';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => [UserDto])
    async users(): Promise<User[]>{
        return this.userService.getData();
    }

    @Mutation(() => UserDto)
    async userCreate(@Args('UserInput') UserInput: UserInput): Promise<User>{
        return this.userService.create(UserInput);
    }


}