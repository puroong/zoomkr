export function stringify(obj: object) {
  return Object.keys(obj)
    .filter((key) => obj[key] !== undefined)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');
}
