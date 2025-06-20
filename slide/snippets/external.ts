/* eslint-disable no-console */

// #region snippet
// Inside ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length });
}
// #endregion snippet

export function sayHello() {
  console.info("Hello from snippets/external.ts");
}
