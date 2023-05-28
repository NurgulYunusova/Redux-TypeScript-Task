import axios from "axios";
import { User } from "../models/User";

export const userService = {
  getData: async (): Promise<User[]> => {
    let users: User[] = [];

    await axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        users = res.data;
      });

    return users;
  },
};
