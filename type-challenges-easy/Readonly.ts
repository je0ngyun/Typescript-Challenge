/**
 * T의 모든 프로퍼티를 읽기 전용(재할당 불가)으로 바꾸는 내장 제네릭 Readonly<T>를 이를 사용하지 않고 구현하세요.
 */

namespace Readonly {
  type MyReadonly<T> = {
    readonly [key in keyof T]: T[key];
  };

  type TestType = {
    foo: 1;
    bar: 2;
    baz: 3;
  };

  type Result = MyReadonly<TestType>;
}
