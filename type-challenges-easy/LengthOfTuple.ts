/**
 * 배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현하세요.
 */

namespace LengthOfTuple {
  type LengthOfTuple<T extends any[]> = T['length'];

  type TestType = ['a', 'b', 'c'];

  type Result = LengthOfTuple<TestType>;
}
