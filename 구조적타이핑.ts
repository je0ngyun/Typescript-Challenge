/**
 * 타입스크립트는 구조적 서브타이핑을 기반으로 한다.
 * 구조적 타이핑이란 멤버만으로 타입을 관계시키는 것.
 * 안정성과 유연함 사이의 절충안이다.
 */

interface Axis {
  x: number;
  y: number;
  z: number;
}

const calc = ({ x, y, z }: Axis) => {
  return x * y * z;
};

const axis: Axis = {
  x: 1,
  y: 2,
  z: 3,
};

calc(axis); // 오류없음 (타입일치)

// 명목적 타이핑을 위해 상속관계를 명확히한 interface
interface NameAxis extends Axis {
  name: string;
}

const namedAxis: NameAxis = {
  x: 1,
  y: 2,
  z: 3,
  name: 'axis',
};

calc(namedAxis); //오류없음 (상속관계가 명확)

const namedAxis2 = {
  x: 1,
  y: 2,
  z: 3,
  name: 'axis2',
};

calc(namedAxis2); //오류없음 (namedAxis2의 멤버는 최소한 Axis의 멤버와 동일한 타입을 가지므로)

/**
 * 예외적 상황 FreshLiteral인 경우에는 구조적 타이핑에 기반한 호환이 작동하지 않는다.
 * 모든 ObjectLiteral은 초기에 fresh한 상태이며 타입단언이나 타입추론이 이루어 지면 fresh 상태가 사라진다.
 */

// calc({
//   x: 1,
//   y: 2,
//   z: 3,
//   name: 'axis2',
// });
// 위 코드는 오류가 발생된다 전달된 인자는 fresh한 상태이므로 프로퍼티가 정확히 일치한지 검사가 진행된다.

calc({ x: 1, y: 2, z: 3 }); //오류없음 (프로퍼티가 정확이 일치하므로 오류가 발생하지 않음)

/**
 * 개발자가 함수의 인자로 적용시킨 타입 외에는 어떠한것도 호환이 되지 않도록 할때
 * Branded type을 고려해 볼 수 있다.
 */
type Brand<T, B> = T & { __brand: B };

type BrandedAxis = Brand<
  {
    x: number;
    y: number;
    z: number;
  },
  'Axis'
>;

const calc2 = ({ x, y, z }: BrandedAxis) => {
  return x * y * z;
};

const noBrandAxis = {
  x: 1,
  y: 1,
  z: 1,
};

//calc2(noBrandAxis);
//위 함수는 __brand 프로퍼티가 없는경우 오류가 발생한다.
//함수의 매개변수에 정의한 타입 외에는 구조적 타이핑을 통한 호환이 되지 않는다.
