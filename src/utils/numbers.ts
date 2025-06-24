export function random(min: number = 0, max: number = 1) {
  return Math.random() * (max - min) + min;
}

export function range(count: number, start = 1) {
  return Array.from(Array(Math.ceil(count)).keys()).map(value => start + value);
}
