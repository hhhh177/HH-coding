let str = 'yessey'

// function isPalindrome(s) {
//   const res = s.split('').reverse().join('')
//   return res === s
//   // if (res === s) {
//   //   return true
//   // } else {
//   //   return false
//   // }
// }

function isPalindrome(s) {
  let i = 0, j = s.length - 1;
  while (i <= j) {
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      return false
    }
  }
  return true
}

console.log(isPalindrome(str));