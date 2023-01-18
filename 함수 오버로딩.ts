/**
 * 함수명은 같지만, 매개변수와 반환 타입이 다른 함수를 여러 개 선언할 수 있는 특징을 말한다.
 * 컴파일 시간에 가장 적합한 오버로드를 선택하여 컴파일 하므로 자바스크립트 실행 시에는 런타임 비용이 발생하지 않음.
 * 타입스크립트는 타입에대한 오버로딩만 지원하므로 구현은 각 케이스에 맞게 따로 해주어야 한다.
 */

/**
 * 매개변수의 개수는 동일하지만, 타입이 다른 경우
 */
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}

/**
 * 매개변수의 개수는 다르지만, 타입은 동일한 경우
 */
function addNumber(a: number): number;
function addNumber(a: number, b: number): number;
function addNumber(a: number, b?: number, c?: number): number;
function addNumber(a: number, b?: number, c?: number): number {
  return a + (b ?? 0) + (c ?? 0);
}

/**
 * 매개변수의 개수와 타입이 다른 경우
 */
interface Position {
  x: number;
  y: number;
}

function printPosition(posObj: Position): void;
function printPosition(x: number, y: number): void;
function printPosition(arg1: unknown, arg2?: unknown) {
  // 타입가드
  if (typeof arg1 === 'object') {
    const { x, y } = arg1 as Position;
    console.log(x, y);
    return;
  }
  if (typeof arg1 === 'number') {
    console.log(arg1, arg2);
    return;
  }
  return;
}

printPosition({ x: 1, y: 2 });
printPosition(1, 2);

/**
 * 매개변수의 개수와 타입이 다른 경우 리턴값은 Union이므로 안전하지 않을 수 있다.
 * 인수가 리턴 타입에 영향을 미칠 때 조건 타입에 따른 제네릭 타입을 사용하는것이 안전하다.
 */
function printPositionGeneric<T extends number | Position>(
  arg1: T,
  arg2?: T,
): T extends number ? number : Position {
  if (typeof arg1 === 'object') {
    return arg1 as number & Position;
  }
  return ((arg1 as number) + (arg2 as number)) as number & Position;
}
