/**
 * 정확한 문자열 타입이고 시작 부분의 공백이 제거된 새 문자열을 반환하는 TrimLeft<T>를 구현하십시오.
 */

namespace TrimLeft {
  // infer 키워드를 통해 앞에 공백이 붙은경우 계속해서 줄여나가는 것으로 접근
  // 공백이 없는 string일 경우 타입 T로 할당
  type TrimLeft<T extends string> = T extends `${' '}${infer R}`
    ? TrimLeft<R>
    : T;

  type trimed = TrimLeft<'  Hello World  '>; //'Hello World   '
}
