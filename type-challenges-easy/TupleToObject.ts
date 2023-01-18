/**
 * 배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.
 */

namespace TupleToObject {
  type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K;
  };

  const tuple = ['foo', 'bar', 'baz'] as const;

  type Result = TupleToObject<typeof tuple>;
}
