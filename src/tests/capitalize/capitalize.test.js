import { capitalize } from "./capitalize.js";

test('should return the first letter of "josh" capitalized.', () => {
   expect(capitalize("josh")).toBe("Josh");
});

test('should return the first letter of "denmark" capitalized.', () => {
   expect(capitalize("denmark")).toBe("Denmark");
});
