function telephoneCheck(str) {
  let regExp = /^1?[-\s]?(\d{3})[-\s]?(\d{3})[-\s]?(\d{4})$|^1?\s?\((\d{3})\)[\s-]?(\d{3})-?(\d{4})$/
  return regExp.test(str);
}

// First option of the regExp is looking for:
// 1. An optional number 1 for the country code
// 2. An optiona space or hyphen
// 3. A grouping of 3 numbers (area code)
// 4. An optional space or hyphen
// 5. A grouping of 3 numbers
// 6. An optional space or hyphen
// 7. A grouping of four numbers

// Second option of regExp is looking for:
// 1. An optional 1 for the country code
// 2. An optional space
// 3. An escaped opening parenthesis
// 4. A grouping of 3 numbers (area code)
// 5. An escaped closing parenthesis
// 6. An optional hyphen
// 7. A grouping of 3 numbers
// 8. An optional hyphen
// 9. A grouping of 4 numbers

// In either case, these are all placed between ^ and $,
// so there can't be anything else before/after.

