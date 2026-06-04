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


// another example 
type ApiResponse = Promise<string>;

type ExtractPromise<T> =
  T extends Promise<infer U>
    ? U
    : never;

type Result = ExtractPromise<ApiResponse>;