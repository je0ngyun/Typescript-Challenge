/**
 * 문자열 S에서 From를 찾아 한 번만 To로 교체하는 Replace<S, From, To>를 구현하세요.
 */

namespace Replace {
  //infer를 이용하여 해당 단어가 포함되는 string일 경우에 바꿔주는 것으로 해결
  type Replace<
    O extends string,
    F extends string,
    T extends string,
  > = O extends `${infer T1}${F}${infer T2}` ? `${T1}${T}${T2}` : O;

  type replaced = Replace<'types are fun!', 'are', 'awesome'>;
}
