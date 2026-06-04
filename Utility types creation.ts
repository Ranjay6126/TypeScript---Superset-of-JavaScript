type MyPick<
  T,
  K extends keyof T
> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  name: string;
}

type UserInfo = MyPick<
  User,
  "id"
>;