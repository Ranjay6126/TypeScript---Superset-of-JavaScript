class Factory<T> {
  create(data: T): T {
    return data;
  }
}

const factory =
  new Factory<{
    id: number;
    name: string;
  }>();

factory.create({
  id: 1,
  name: "Dhanush"
});