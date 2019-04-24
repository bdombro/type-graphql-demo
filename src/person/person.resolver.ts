import {Resolver, Arg, Int, Mutation, Query, Args} from "type-graphql";

import {GetAllArgs, ResourceResolver} from "../resource/resource.resolver";
import {Person} from "./person.type";
import {PersonRole} from "./person.role";
import {getRepository, Repository} from "typeorm";
import {InjectRepository} from "typeorm-typedi-extensions/decorators/InjectRepository";

// const persons: Person[] = [
//   {
//     id: 1,
//     name: "Person 1",
//     age: 23,
//     role: PersonRole.Normal,
//   },
//   {
//     id: 2,
//     name: "Person 2",
//     age: 48,
//     role: PersonRole.Admin,
//   },
// ];

@Resolver()
export class PersonResolver extends ResourceResolver(Person) {
    constructor(@InjectRepository(Person) public readonly repository: Repository<Person>) {
        super();
    }

    // here you can add resource-specific operations

    // @Mutation()
    // async promote(@Arg("personId", type => Int) personId: number): Promise<boolean> {
    //   // you have full access to base resolver class fields and methods
    //
    //   const person = await this.repository.findOne(personId);
    //   if (!person) {
    //     throw new Error("Person not found!");
    //   }
    //
    //   if (person.role === PersonRole.Normal) {
    //     person.role = PersonRole.Pro;
    //     return true;
    //   }
    //
    //   return false;
    // }
}
