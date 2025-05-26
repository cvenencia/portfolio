export function wait(duration?: number) {
  return new Promise(resolve => setTimeout(resolve, duration || 5000));
}
