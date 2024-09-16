class RomanNumerals {
  static M = 1000;
  static CM = 900;
  static D = 500;
  static CD = 400;
  static C = 100;
  static XC = 90;
  static L = 50;
  static XL = 40;
  static X = 10;
  static IX = 9;
  static V = 5;
  static IV = 4;
  static I = 1;

  static toRoman(num) {
    return this.num;
  }

  static fromRoman(str) {
    return RomanNumerals.str;
  }
}

// console.log(RomanNumerals.toRoman(1000));
console.log(RomanNumerals.fromRoman("CD"));
