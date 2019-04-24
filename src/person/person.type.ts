import { ObjectType, Field, Int } from "type-graphql";
import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

import { Resource } from "../resource/resource";
import { PersonRole } from "./person.role";

@ObjectType()
@Entity()
export class Person implements Resource {
  @Field()
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  name: string;

  @Field(type => Int)
  @Column()
  age: number;

  @Field(type => PersonRole)
  @Column()
  role: PersonRole;
}
