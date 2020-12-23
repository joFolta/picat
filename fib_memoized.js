// https://medium.com/@josebrwn/great-article-f6b995b4968e

let result = [];
function fib_memoized(n) {
  if (n < 2) {
    result[n] = 1;
  } else if (result[n] === undefined) {
    result[n] = fib_memoized(n - 1) + fib_memoized(n - 2);
  }
  return result[n];
}

console.log(fib_memoized(1337));
