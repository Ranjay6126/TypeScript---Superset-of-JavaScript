function merge<
  T extends any[]
>(
  ...args: T
) {
  return args;
}

const result = merge(
  1,
  "Hello",
  true
);