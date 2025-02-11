import { analyzeArray } from "./analyze-array.js";

test("should return an object that has an min property", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("should return an object that has an max property", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("should return the average", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("should return the average", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6, 7, 5]).average).toBe(4.5);
});

test("should return an object that has an length property", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("should return an object that has an length property", () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6, 12, 11, 9]).length).toBe(9);
});
