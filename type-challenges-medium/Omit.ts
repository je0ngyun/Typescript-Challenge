/**
 * T에서 K 프로퍼티만 제거해 새로운 오브젝트 타입을 만드는 내장 제네릭 Omit<T, K>를 이를 사용하지 않고 구현하세요.
 */

namespace Omit {
  // Exclude 사용 구현
  type MyOmit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key];
  };

  // Exclude 사용하지 않고 구현
  type MyOmit2<T, K extends keyof T> = {
    [key in keyof T as key extends K ? never : key]: T[key];
  };

  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  type Result = MyOmit<Todo, 'completed'>;
  type Result2 = MyOmit<Todo, 'description'>;
}
