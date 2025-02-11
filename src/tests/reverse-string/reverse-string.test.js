import { reverseString } from "./reverse-string.js";

test('should return "save" reversed as "evas"', () => {
   expect(reverseString("save")).toBe("evas");
});

test('should return "figen" reversed as "negif"', () => {
   expect(reverseString("figen")).toBe("negif");
});
