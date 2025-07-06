type One = string;
type Two = string | number;
type Three = "Hello";

const a: One = "Hello";
const b = a as Two;
// const c = a as Three;
const c = <Three>a;

console.log(c);

type A = { id: number };
type B = { uuid: number };

// const beforeAfter = { userUUID: 0 } as unknown as B;
const beforeAfter = <B><unknown>{ userUUID: 0 };

console.log(beforeAfter);
