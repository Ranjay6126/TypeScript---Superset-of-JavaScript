interface API {
  "/users": {
    id: number;
    name: string;
  };

  "/posts": {
    title: string;
  };
}

function fetchAPI<
  T extends keyof API
>(
  endpoint: T
): API[T] {
  return {} as API[T];
}

const user =
  fetchAPI("/users");