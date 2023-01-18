/**
 * 인터페이스(interface)는 클래스에서 구현 부분이 빠진 타입.
 * 또한 인터페이스는 객체 리터럴을 정의하는 타입 또는 익명 함수에 대한 함수 타입을 정의할 수 있다.
 * 인터페이스는 컴파일 후에 사라지므로 런타임에 영향을 주지 않는다.
 */

/**
 * 인터페이스는 다중 상속이 가능하다.
 * 같은 이름의 메서드를 상속받으면, 상속받는 인터페이스에서 같은 이름의 메서드를 모두 재정의 해야 한다.
 */
interface A {
  getStatus(): { a: number };
}

interface B {
  getStatus(): { b: number };
}

interface C extends A, B {
  getStatus(): { a: number; b: number };
}

class C implements C {
  getStatus() {
    return { a: 10, b: 20 };
  }
}

console.log(new C().getStatus());

/**
 * 인터페이스를 이용한 익명 함수의 타입 정의
 */
interface Add {
  (a: number, b: number): number;
}

/**
 * 인터페이스를 이용한 객체 리터럴의 모양 정의
 */
interface Post {
  id: number;
  title: string;
  createdAt: string;
}

const post: Post = {
  id: 1,
  title: 'title',
  createdAt: '2022-11-06',
};
