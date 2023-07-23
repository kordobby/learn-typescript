// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}

sum(10, 20); // function sum(a: number, b: number): number
// sum(10, 20, 30, 40); // 2개의 인수가 필요한데 4개를 가져왔습니다.

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function summary(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log("hellog world");
log("hello ts", "abc");
