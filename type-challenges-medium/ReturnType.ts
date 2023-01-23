/**
 * 내장 제네릭 ReturnType<T>을 이를 사용하지 않고 구현하세요.
 */

namespace ReturnType {
  type MyReturnType<T extends Function> = T extends (...arg: any) => infer R
    ? R
    : never;

  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type Result = MyReturnType<typeof fn>;
}
