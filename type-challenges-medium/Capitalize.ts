/**
 * 문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 Capitalize<T>를 구현하세요.
 */

namespace Capitalize {
  // infer를 이용하여 첫 글자에 접근하여 Uppercase 유틸타입을 적용하는 것으로 해결
  type Capitalize<T extends string> = T extends `${infer L}${infer R}`
    ? `${Uppercase<L>}${R}`
    : T;

  type capitalized = Capitalize<'hello world'>; // expected to be 'Hello world'
}
