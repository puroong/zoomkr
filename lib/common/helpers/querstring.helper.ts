export function stringify(obj?: object) {
  if (obj === undefined) return '';

  return Object.keys(obj)
    .filter((key) => obj[key] !== undefined)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');
}
