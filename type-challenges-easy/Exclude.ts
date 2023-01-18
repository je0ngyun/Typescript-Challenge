/**
 * T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭 Exclude<T, U>를 이를 사용하지 않고 구현하세요.
 */

namespace Exclude {
  type MyExclude<T, U extends T> = T extends U ? never : T;

  type Result = MyExclude<'a' | 'b' | 'c', 'a'>;
}
