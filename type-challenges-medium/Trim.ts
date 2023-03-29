/**
 * 정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 Trim<T>를 구현하십시오.
 */
namespace Trim {
  // 빈문자가 존재할 경우 계속해서 재귀하여 없애는 방식으로 접근
  type Trim<T extends string> = T extends ` ${infer R}`
    ? Trim<R>
    : T extends `${infer R} `
    ? Trim<R>
    : T;
  type trimmed = Trim<'  Hello World  '>; // 기대되는 결과는 'Hello World'입니다.
}
