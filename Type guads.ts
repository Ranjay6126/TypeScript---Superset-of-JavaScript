interface User {
  name: string;
}

function isUser(
  value: any
): value is User {
  return value?.name !== undefined;
}

const data = {
  name: "Dhanush"
};

if (isUser(data)) {
  console.log(data.name);
}