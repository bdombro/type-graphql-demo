import { getRepository } from "typeorm";

import {User} from "./user/user.type";
import {UserRole} from "./user/user.role";

export async function SeedDatabase() {
  const userRepository = getRepository(User);

  const user = userRepository.create({
    name: "sldkfjs",
    age: 22,
    role: UserRole.Pro,
  });
  await userRepository.save(user);

}