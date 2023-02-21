/**
 * 배열 T를 사용해 마지막 요소를 제외한 배열을 반환하는 제네릭 Pop<T>를 구현합니다.
 */

namespace Pop {
  type arr1 = ['a', 'b', 'c', 'd'];
  type arr2 = [3, 2, 1];
  type arr3 = [];

  type Pop<T extends any[]> = T extends [...infer rest, any] ? rest : [];

  type Result1 = Pop<arr1>;
  type Result2 = Pop<arr2>;
  type Result3 = Pop<arr3>;
}
