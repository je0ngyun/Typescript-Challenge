/**
 * Array.push의 제네릭 버전을 구현하세요.
 */

namespace Push {
  type Push<A extends any[], T> = [...A, T];

  type Result = Push<[1, 2], 3>;
}
