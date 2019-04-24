import { getRepository, Column, ColumnOptions } from "typeorm";

import { Recipe } from "./entities/recipe";
import { Rate } from "./entities/rate";
import { User } from "./entities/user";
import {Person} from "./person/person.type";
import {PersonRole} from "./person/person.role";

export async function seedDatabase() {
  const recipeRepository = getRepository(Recipe);
  const ratingsRepository = getRepository(Rate);
  const userRepository = getRepository(User);
  const personRepository = getRepository(Person);

  const defaultUser = userRepository.create({
    email: "test@github.com",
    nickname: "19majkel94",
    password: "s3cr3tp4ssw0rd",
  });
  await userRepository.save(defaultUser);

  const person = personRepository.create({
    name: "sldkfjs",
    age: 22,
    role: PersonRole.Pro,
  });
  await personRepository.save(person);

  const recipes = recipeRepository.create([
    {
      title: "Recipe 1",
      description: "Desc 1",
      author: defaultUser,
      ratings: ratingsRepository.create([
        { value: 2, user: defaultUser },
        { value: 4, user: defaultUser },
        { value: 5, user: defaultUser },
        { value: 3, user: defaultUser },
        { value: 4, user: defaultUser },
      ]),
    },
    {
      title: "Recipe 2",
      author: defaultUser,
      ratings: ratingsRepository.create([
        { value: 2, user: defaultUser },
        { value: 4, user: defaultUser },
      ]),
    },
  ]);
  await recipeRepository.save(recipes);

  return {
    defaultUser,
  };
}

export function RelationColumn(options?: ColumnOptions) {
  return Column({ nullable: true, ...options });
}
