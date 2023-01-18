/**
 * declare 키워드는 변수, 상수, 함수, 또는 클래스가 어딘가에 이미 선언되어 있음을 알리는 키워드이다.
 * JS 코드로는 컴파일 되지 않는다.
 * d.ts 파일에서는 declare namespace 블록과 declare module 블록의 필드에 export 키워드가 기본으로 붙는다.
 */

/**
 * 네임스페이스는 원래라면 JS로 컴파일되어 IIFE 형태로 실행되지만,
 * declare 키워드가 붙으면 JS 코드로 컴파일 되지않는다.
 * 일반적으로는 몇몇 타입들을 의미적으로 묶고 싶은 경우에 사용한다.
 */
declare namespace Namespace {
  interface Foo {
    a: number;
  }
}

//설명용 임시 타입
type To = unknown;
type NavigateOptions = unknown;
type RoutePaths = unknown;

//실제 import 시
//import { NavigateOptions, To } from 'react-router-dom';

//실제 RoutesPaths 타입
// const RoutePaths = {
//   landing: '/',
//   home: '/home',
// } as const
// type RoutePaths = typeof RoutePaths [keyof typeof RoutePaths]

/**
 * 앰비언트 모듈 선언 파일은 컴파일 대상에 해당 모듈이 포함된다면 타입 정보를 참조할 수 있게 된다.
 * 아래는 useNavigate가 반환하는 navigate 함수에 오버로딩을 하여
 * RoutePaths가 자동완성에 표시될 수 있도록 한다.
 */
declare module 'react-router-dom' {
  interface NavigateFunction {
    (to: RoutePaths, options?: NavigateOptions): void;
  }
}

/**
 * 모듈 파일에서도 전역 참조가 가능한 선언 코드를 작성하고 싶을 때 사용한다.
 * 전역 참조가 가능하다는 것은 해당 선언의 참조를 위해 별도의 불러오기 코드가 필요 없다는 뜻이다.
 */
declare module 'main' {
  global {
    interface Location {
      replace(url: RoutePaths): void;
    }
  }
}
