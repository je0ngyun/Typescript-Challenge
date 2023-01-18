/**
 * 배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.
 */

namespace FirstOfArray {
  type FirstOfArray<T extends any[]> = T[0];

  type TestType = ['a', 'b', 'c'];

  type Result = FirstOfArray<TestType>;
}
