/**
 * Array.unshift의 타입 버전을 구현하세요.
 */

namespace Unshift {
  type Unshift<A extends any[], T> = [T, ...A];

  type Result = Unshift<[1, 2, 3], 4>;
}
