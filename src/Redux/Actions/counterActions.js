export const INCREMENT = "INCREMENT";
export const INCREMENTSPECIFIC = "INCREMENTSPECIFIC";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function reset() {
  return { type: RESET };
}

export function incrementSpecific(number) {
  return {
    type: INCREMENTSPECIFIC,
    number,
  };
}
