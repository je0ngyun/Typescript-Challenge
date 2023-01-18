/**
 * 기본 타입부분에서 알아야 할 것들 정리
 */

/**
 * never type
 * 타입스크립트에서 never 타입은 값의 공집합이다. 즉 불가능을 나타내는 타입
 * 유니온 타입에서는 없어지고 교차타입에서는 덮어씌운다.
 */

type NeverUnion = never | string; // string
type NeverIntersect = never & string; // never

/**
 * Tuple
 * tuple은 배열 요소가 n개로 정해질 때 각 요소별로 타입을 지정한 타입이다.
 * 요소별로 타입지정하지 않을 경우 타입추론에 의한 타입지정이 된다.
 */
const tuple: [string, number] = ['tuple', 0];
const notTuple = ['tuple', 0];

/**
 * enum과 union 타입
 * enum은 컴파일시 객체가 생성되며 tree shaking이 되지 않는다.
 * as const 를 이용한 union 타입을 이용하자. (readonly 처리 및 타입추론범위 줄이기)
 */
const POST_TYPE = {
  discomfort: 'discomfort',
  notice: 'notice',
} as const;

type POST_TYPE = typeof POST_TYPE[keyof typeof POST_TYPE];

/**
 * typeof keyword
 * 객체에 쓰인 타입구조를 그대로 가져와 독립된 타입으로 만든다.
 * 클래스인경우에는 클래스 자체가 객체 타입이 될수 있으므로 typeof 불필요
 */
const obj = {
  foo: 'foo',
  bar: 'bar',
  baz: 'baz',
};

type Obj = typeof obj;

/**
 * keyof keyword
 * 객체 형태의 타입을, 따로 속성들만 뽑아 모아 유니온 타입으로 만들어주는 연산자
 */

type ObjKeyUnion = keyof typeof obj;

/**
 * Mapped type (in keyword)
 * 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미.
 */

interface User {
  username: string;
  age: number;
  name: string;
  email: string;
}

/**
 * User의 각 프로퍼티를 Optional로 만든다.
 */
type UserUpdate = {
  [p in keyof User]?: User[p];
};

/**
 * infer keyword
 * infer는 조건문에 쓰이는 타입 중 하나를 이름 붙여서 빼 와서, 삼항 연산자의 true절이나 false절에 사용하기 위해 사용한다.
 * 또한 infer 키워드는 제약 조건 extends가 아닌 조건부 타입 extends절에서만 사용 가능하다.
 */

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

// ReturnType은 하나의 타입을 인자 T로 받아서, 어떠한 조건문을 거쳐서 R이나 any를 내놓는다.
// 위 MyReturnType의 Generic 조건은 함수여야한다.

// Right hand side의 T extends (...args: any) => infer R 구문은 참이면 R을, 그렇지 않으면 any를 반환한다.
// 즉 T는 함수여야 하고, 그의 반환 타입을 R이라고 명명하고 이를 뒤에서 사용할 것이다 라는 뜻.
// extends 키워드를 right hand side에서 다시 기술한 이유는 infer R로 반환 타입을 이름 붙여서 가져오기 위해 함수의 타입 정의를 다시 기술한 것에 불과.

// infer 키워드를 사용하여 튜플의 마지막 타입 가져오기

type Tuple = [number, string];
type EndTypeOfTuple<T> = T extends [...infer _, infer R] ? R : [];
type EnfType = EndTypeOfTuple<Tuple>;

/**
 * is keyword
 * 타입 명제를 사용하여 명시적으로 타입 가드를 지정해 줄 수 있는 연산자.
 */

class Animal {
  constructor(public move: number) {}
}

class Bird extends Animal {
  constructor(fly: number) {
    super(fly);
  }
  chirp() {
    console.log(this.move);
  }
}

const animal: Animal = new Bird(100);

// is keyword를 사용하여 타입 가드를 지정해 준다
const isBird = (animal: Animal): animal is Bird => {
  if ('chirp' in animal) return true;
  return false;
};

// isBird를 사용하여 범위를 좁힌다
if (isBird(animal)) {
  animal.chirp();
}

type Keys = 'alpha' | 'beta' | 'gamma';

/**
 * satisfies keyword
 * literal (값) 이나 변수를 안전하게 upcast 하는 기능을 수행.
 * upcast : 자식 클래스의 객체가 부모 클래스 타입으로 형변환 되는 것
 */

type Image = {
  dataUrl: Blob;
  fileSize: number;
};

// 첨부된 이미지를 표현하는 샘플 데이터
const img: Image = {
  dataUrl: new Blob([new ArrayBuffer(10)], { type: 'image/png' }),
  fileSize: 100,
};

// 이미지 데이터는 서버측에서 전달된 url 혹은 첨부된 이미지 두가지 타입을 가질수 있다.
type UserImage = string | Image;

// 공지글을 표현하는 타입
type Notice = {
  title: string;
  content: string;
  image: UserImage;
};

const badCase: Notice = {
  title: 'title',
  content: 'content',
  image: 'img-url',
};

/**
 * badCase의 경우 image는 string 타입으로 추론되지 않는다.
 */
badCase.image.valueOf;
badCase.image.toString;

const goodCase = {
  title: 'title',
  content: 'content',
  image: 'img-url',
} satisfies Notice;

/**
 * goodCase의 경우 image는 string으로 추론된다.
 */
goodCase.image.valueOf;
goodCase.image.charAt;
goodCase.image.includes;

const goodCase2 = {
  title: 'title',
  content: 'content',
  image: img,
} satisfies Notice;

/**
 * goodCase의 경우 image는 Image 타입으로 추론된다.
 */
goodCase2.image.dataUrl;
goodCase2.image.fileSize;
