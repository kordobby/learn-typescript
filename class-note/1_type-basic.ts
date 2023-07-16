var str = "hello";
var str: string = "hello";

let num: number = 10;
let arr: Array<number> = [1, 2, 3];

/* TYPE ERROR
let pokemons: Array<string> = ["피카츄", "파이리", 0];
pokemons = [0, 1, 2];
*/
let pokemons: Array<string> = ["피카츄", "파이리"];
let hogwarts: string[] = ["해리포터", "론", "헤르미온느"];

// TS 튜플
let address: [string, number] = ["강남", 100];

// TS 객체
let obj: object = {};

// 객체 내부의 키와 값의 타입에 크게 신경쓰지 않음
let leetrue: object = {
  name: "leetrue",
  age: 100,
};

let lxxtrue: { name: string; age: number } = {
  name: "leetrue",
  age: 100,
};

// TS 진위값
let show: boolean = true;
