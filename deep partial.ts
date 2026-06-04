type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

interface User {
  profile: {
    name: string;
    age: number;
  };
}

const data: DeepPartial<User> = {
  profile: {
    age: 25
  }
};