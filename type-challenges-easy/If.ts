/**
 * 조건 C, 참일 때 반환하는 타입 T, 거짓일 때 반환하는 타입 F를 받는 타입 If를 구현하세요. C는 true 또는 false이고, T와 F는 아무 타입입니다.
 */

namespace If {
  type If<B extends boolean, T, F> = B extends true ? T : F;

  type Result = If<true, 't', 'f'>;
}
