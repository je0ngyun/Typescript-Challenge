/**
 * 배열 T를 사용하고 마지막 요소를 반환하는 제네릭 Last<T>를 구현합니다.
 */

namespace LastOfArray {
  type LastOfArray<T extends any[]> = T extends [...infer rest, infer R]
    ? R
    : never;
  type arr1 = ['a', 'b', 'c'];
  type arr2 = [3, 2, 1];

  type Result = LastOfArray<arr2>;
}
