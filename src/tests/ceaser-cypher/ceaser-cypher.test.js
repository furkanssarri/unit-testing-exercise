import { ceaserCypher } from "./ceaser-cypher.js";

test('should shift "xyz" by 3 and return "abc', () => {
   expect(ceaserCypher("xyz", 3)).toBe("abc");
});

test('should shift "HeLLo" by 3 and return "KhOOr"', () => {
   expect(ceaserCypher("HeLLo", 3)).toBe("KhOOr");
});

test('should shift "Hello, World! by 3 and return "Khoor, Zruog!"', () => {
   expect(ceaserCypher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('should shift "Hello, World!" by 5 and return "Mjqqt, Btwqi!"', () => {
   expect(ceaserCypher("Hello, World!", 5)).toBe("Mjqqt, Btwqi!");
});
