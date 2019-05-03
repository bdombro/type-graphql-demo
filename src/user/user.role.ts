import { registerEnumType } from "type-graphql";

export enum UserRole {
  Normal,
  Pro,
  Admin,
}

registerEnumType(UserRole, { name: "UserRole" });
