# ceasar cypher

expects a string to be returned as encrypted by a _easar cypher_. see [ceasar cypher](https://en.wikipedia.org/wiki/Caesar_cipher) for more information.

this function takes in a _string_ and a _shift factor_ and returns the, sort of, encrypted string.

it does take:

-  upper case,
-  lower case,
-  numbers,
-  punctiation

into consideration, leaving those untouched.

## examples

with a shift factor of 3,

-  expects "**hello**" to be "**khoor**"
-  expects "**Hello**" to be "**Khoor**"
-  expects "**Hello, world!**" to be "**Khoor, zruog!**"
-  expects "**attack at once**" to be "**dwwdfn dw rqfh**",

with a shift factor of 17,

-  expects "**hello**" to be "**yvccf**",
-  expects "**Hello**" to be "**Yvccf**",
-  expects "**Hello, world!**" to be "**Yvccf, nficu!**",
-  expects "**attack at once**" to be "**rkkrtb rk fetv**"
