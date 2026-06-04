type EventType = "click" | "hover";

type EventName = `on${Capitalize<EventType>}`;

let event: EventName;

event = "onClick";


//  generic constraints
function getLength<T extends { length: number }>(
  item: T
) {
  return item.length;
}

getLength("Hello");
getLength([1, 2, 3]);


// keyof + Generics

function getProperty<
  T,
  K extends keyof T
>(
  obj: T,
  key: K
) {
  return obj[key];
}

const user = {
  name: "Dhanush",
  age: 22
};

getProperty(user, "name");