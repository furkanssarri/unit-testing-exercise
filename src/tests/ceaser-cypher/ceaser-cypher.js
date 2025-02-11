export function ceaserCypher(str, s) {
   s = ((s % 26) + 26) % 26;

   return str.replace(/[a-z]/gi, (char) => {
      const base = char < "a" ? 65 : 97;
      return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base);
   });
}
