/**
 * JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.
 */

namespace Includes {
  type Includes<A extends any[], X> = X extends A[number] ? true : false;

  type Result1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // false
  type Result2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'>;
}
