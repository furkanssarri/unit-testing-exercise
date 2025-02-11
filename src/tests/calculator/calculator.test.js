import { calculator } from "./calculator.js";

test("should add 2 to 3 equal to be 5", () => {
   expect(calculator.add(2, 3)).toBe(5);
});

test("should add 5 to 4 equal to be 9", () => {
   expect(calculator.add(5, 4)).toBe(9);
});

test("should multiply 2 by 2 to be 4", () => {
   expect(calculator.multiply(2, 2)).toBe(4);
});

test("should mutliply 5 by 2 to be 10", () => {
   expect(calculator.multiply(5, 2)).toBe(10);
});

test("should subtract 2 from 6 to be 4", () => {
   expect(calculator.subtract(6, 2)).toBe(4);
});

test("should subtract 12 from 24 to be 12", () => {
   expect(calculator.subtract(24, 12)).toBe(12);
});

test("should divide 10 by 2 to be 5", () => {
   expect(calculator.divide(10, 2)).toBe(5);
});

test("should divide 8 by 2 to be 4", () => {
   expect(calculator.divide(8, 2)).toBe(4);
});
