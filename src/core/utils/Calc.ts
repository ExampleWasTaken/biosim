class Calc {
  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static random(min: number, max: number): number {
    return Math.random() * (max - min + 1) + min;
  }
}

export default Calc;
