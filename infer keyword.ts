type GetReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;

function getUser() {
  return {
    id: 1,
    name: "Dhanush"
  };
}

type UserType = GetReturnType<typeof getUser>;