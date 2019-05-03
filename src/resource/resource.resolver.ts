import {Service} from "typedi";
import {
    Query,
    Arg,
    Int,
    Resolver,
    ArgsType,
    Field,
    Args,
    FieldResolver,
    Root,
    ClassType,
} from "type-graphql";
import {InjectRepository} from "typeorm-typedi-extensions";

import {Resource} from "./resource";
import {getRepository, Repository} from "typeorm";
import {User} from "../user/user.type";

@ArgsType()
export class GetAllArgs {
    @Field(type => Int)
    skip: number = 0;

    @Field(type => Int)
    take: number = 10;
}

export function ResourceResolver<TResource extends Resource>(
    ResourceCls: ClassType
    // ResourceCls: User
) {
    const resourceName = ResourceCls.name.toLocaleLowerCase();

    // `isAbstract` decorator option is mandatory to prevent multiple registering in schema
    @Resolver(of => ResourceCls, {isAbstract: true})
    @Service()
    abstract class ResourceResolverClass {
        // protected repository: ResourceService<TResource>;
        // @ts-ignore
        protected repository: Repository<ResourceCls>;
        // @InjectRepository(User)
        // public repository: Repository<User>;

        constructor(
            // @ts-ignore
            // @InjectRepository(ResourceCls) public readonly repository: Repository<ResourceCls>,
            // @InjectRepository(User) public readonly repository: Repository<User>,
        ) {
            // this.repository = getRepository(ResourceCls);
            // this.repository.findOne(1).then(r => console.dir(r.role))
        }

        @Query(returns => ResourceCls, {name: `${resourceName}`})
        protected async getOne(@Arg("id", type => Int) id: number) {
            return this.repository.findOne(id);
        }

        @Query(returns => [ResourceCls], {name: `${resourceName}s`})
        protected async getAll(@Args() {skip, take}: GetAllArgs) {
            return this.repository.find();
        }

        // @Query(returns => ResourceCls, { name: `${resourceName}` })
        // protected async getOne(@Arg("id", type => Int) id: number) {
        //   return this.resourceService.getOne(id);
        // }
        //
        // @Query(returns => [ResourceCls], { name: `${resourceName}s` })
        // protected async getAll(@Args() { skip, take }: GetAllArgs) {
        //   const all = this.resourceService.getAll(skip, take);
        //   return all;
        // }
        //
        // // dynamically created field with resolver for all child resource classes
        // @FieldResolver({ name: "uuid" })
        // protected getUuid(@Root() resource: Resource): string {
        //   return `${resourceName}_${resource.id}`;
        // }
    }

    return ResourceResolverClass;
}
