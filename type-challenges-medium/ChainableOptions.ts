/**
 * RE:
 * 체인 가능 옵션은 일반적으로 Javascript에서 사용됩니다. 하지만 TypeScript로 전환하면 제대로 구현할 수 있나요?
 * 이 챌린지에서는 option(key, value)과 get() 두가지 함수를 제공하는 객체(또는 클래스) 타입을 구현해야 합니다.
 * 현재 타입을 option으로 지정된 키와 값으로 확장할 수 있고 get으로 최종 결과를 가져올 수 있어야 합니다.
 */

namespace ChainableOptions {
  declare const config: Chainable;

  type Chainable<O extends object = {}> = {
    option<K extends string, V>(
      key: K extends keyof O ? never : K,
      value: V,
    ): Chainable<O & Record<K, V>>; // 이전의 타입을 계속해서 intersection으로 합쳐나가기
    get(): O;
  };

  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .get();
}
