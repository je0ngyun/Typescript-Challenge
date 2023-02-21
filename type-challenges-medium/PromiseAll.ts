/**
 * Type the function PromiseAll that accepts an array of PromiseLike objects,
 * the returning value should be Promise<T> where T is the resolved result array.
 */

namespace PromiseAll {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve) => {
    setTimeout(resolve, 100, 'foo');
  });

  declare const PromiseAll: <T extends any[]>(
    arg: readonly [...T],
  ) => Promise<{ [K in keyof T]: Awaited<T[K]> }>;

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const);
}
