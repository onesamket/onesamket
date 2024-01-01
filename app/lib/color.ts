import { Shape } from "@tsparticles/engine";

export function generateRandomColor(): string {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  return color;
}

export enum shape {
  "star",
  "dots",
  "polygon",
  "circle",
  "stroke",
}
export function getRandomShape(): Shape {
  const shapesArray = Object.values(Shape);
  const randomIndex = Math.floor(Math.random() * shapesArray.length);
  return shapesArray[randomIndex] as Shape;
}
const c = getRandomShape();
console.log(c);
