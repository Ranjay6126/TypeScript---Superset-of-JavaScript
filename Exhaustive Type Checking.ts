type Shape =
  | { kind: "circle" }
  | { kind: "square" };

function draw(
  shape: Shape
) {
  switch (shape.kind) {
    case "circle":
      break;

    case "square":
      break;

    default:
      const neverType: never =
        shape;
  }
}
