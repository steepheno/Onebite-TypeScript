/**
 * 타입 추론 - infer
 * inference의 약자
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;   // string
type B = ReturnType<FuncB>;   // number
type C = ReturnType<number>;  // never (Type R 추론 불가)

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 Promise 타입이어야 한다.
// 2. Promise 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;  // number

type PromiseB = PromiseUnpack<Promise<string>>;  // string