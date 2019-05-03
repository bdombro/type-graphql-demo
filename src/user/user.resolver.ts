import {Resolver, Arg, Int, Mutation, Query, Args} from "type-graphql";

import {GetAllArgs, ResourceResolver} from "../resource/resource.resolver";
import {User} from "./user.type";
import {UserRole} from "./user.role";
import {getRepository, Repository} from "typeorm";
import {InjectRepository} from "typeorm-typedi-extensions/decorators/InjectRepository";

@Resolver()
export class UserResolver extends ResourceResolver(User) {
    constructor(@InjectRepository(User) public readonly repository: Repository<User>) {
        super();
    }

    // here you can add resource-specific operations

    // @Mutation()
    // async promote(@Arg("userId", type => Int) userId: number): Promise<boolean> {
    //   // you have full access to base resolver class fields and methods
    //
    //   const user = await this.repository.findOne(userId);
    //   if (!user) {
    //     throw new Error("User not found!");
    //   }
    //
    //   if (user.role === UserRole.Normal) {
    //     user.role = UserRole.Pro;
    //     return true;
    //   }
    //
    //   return false;
    // }
}
