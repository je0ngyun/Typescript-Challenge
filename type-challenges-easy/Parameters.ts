/**
 * 내장 제네릭 Parameters<T>를 이를 사용하지 않고 구현하세요.
 */

namespace Parameters {
  type Parameters<T extends Function> = T extends (...args: infer R) => void
    ? R
    : never;
  const foo = (arg1: string, arg2: number): void => {};
  type Result = Parameters<typeof foo>;
}
