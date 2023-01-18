/**
 * 타입스크립트에서 오버라이든 메서드의 매개변수 타입은 오버라이딩 메서드의 매개변수 타입과 같거나 상위 타입이어야 한다.
 * 단, 오버라이딩 메서드의 매개변수 타입이 Any 이면 예외
 * 또한 오버라이든 메서드의 매개변수 갯수가 오버라이딩 메서드의 매개변수 갯수와 같거나 많아야 한다.
 */

class Animal {
  say(walk: number) {
    console.log(`나는 동물이고 ${walk} 걸음을 걸었습니다.`);
  }
}

class Bird extends Animal {
  constructor(private name: string) {
    super();
  }
  say(fly: number): void {
    console.log(`나는 ${this.name}이고 ${fly}km만큼 날았습니다.`);
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }
  say(walk: number): void {
    console.log(`나는 강아지이고 ${walk}걸음을 걸었습니다.`);
  }
}

let animal: Animal = new Bird('도도새');
animal.say(120);
animal = new Dog();
animal.say(100);
