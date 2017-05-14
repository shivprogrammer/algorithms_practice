'use strict';

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  return '';
}


Test.assertSimilar(repeatStr(3, "*"), "***");
Test.assertSimilar(repeatStr(5, "#"), "#####");
Test.assertSimilar(repeatStr(2, "ha "), "ha ha ");
