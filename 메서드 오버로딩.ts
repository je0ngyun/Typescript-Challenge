/**
 * 메서드 오버로딩은 함수 오버로딩과 비슷하게
 * 메서드의 이름이 같지만 매개변수의 타입과 개수를 다르게 정의하는 방법
 * 오버라이딩 및 다형성을 고려할 경우 부모 클래스에 상위 타입을 가지는 오버라이든 메서드를 선언하고
 * 오버라이딩 메서드 위에 오버로드를 추가한다.
 */

/**
 * string 또는 string[] 타입을 save 할수 있는 기능을 만든다고 가정
 */
class KeyManager {
  private _keys: string[];
  constructor() {
    this._keys = [];
  }
  get keys() {
    return this._keys;
  }
  save(key: string): string;
  save(key: string[]): string[];
  save(key: string | string[]) {
    if (Array.isArray(key)) {
      this._keys.push(...key);
    } else {
      this._keys.push(key);
    }
    return key;
  }
}

const keyManager = new KeyManager();
console.log(keyManager.save('foo')); // 'foo' 리턴타입이 string[]
console.log(keyManager.save(['bar', 'baz'])); // [ 'bar', 'baz' ] 리턴타입이 string[]
console.log(keyManager.keys);

/**
 * Generic을 이용한 구현
 */
class GenericKeyManager {
  private _keys: string[];
  constructor() {
    this._keys = [];
  }
  get keys() {
    return this._keys;
  }
  save<T extends string | string[]>(key: T) {
    if (typeof key === 'string') {
      this._keys.push(key);
    } else {
      this._keys.push(...key);
    }
    return key;
  }
}

const genericKeyManager = new GenericKeyManager();
console.log(genericKeyManager.save('foo'));
console.log(genericKeyManager.save(['bar', 'baz']));
console.log(genericKeyManager.keys);
