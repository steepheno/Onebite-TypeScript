/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  // 인터페이스로 정의하는 필드들은 무조건 public
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string,  // private으로 정의할거면 따로 선언해야 함
  ) {}

  move() {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
