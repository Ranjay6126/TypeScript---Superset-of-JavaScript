type Events = {
  login: {
    userId: string;
  };
  logout: void;
};

class EventEmitter<
  T extends Record<
    string,
    any
  >
> {
  emit<K extends keyof T>(
    event: K,
    payload: T[K]
  ) {
    console.log(event, payload);
  }
}

const emitter =
  new EventEmitter<Events>();

emitter.emit(
  "login",
  {
    userId: "123"
  }
);