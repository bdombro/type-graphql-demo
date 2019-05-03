import { ObjectType, Field, Int } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

import { Resource } from "../resource/resource";
import { UserRole } from "./user.role";

@ObjectType()
@Entity()
export class User implements Resource {
  @Field()
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  name: string;

  @Field(type => Int)
  @Column()
  age: number;

  @Field(type => UserRole)
  @Column()
  role: UserRole;
}
