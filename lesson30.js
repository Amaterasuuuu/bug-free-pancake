const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const symbols = ['@', '#', '$', '%', '&', '*', '!', '?']

function validatePassword(password, repeatPassword) {
  if (password != repeatPassword) {
    return 'Passwords must match'
  }

  if (password.length < 8) {
    return 'Password\'s length must be more than 8 characters'
  }
  
  const isUppercaseExist = !password
    .split('')
    .some(letter => letter == letter.toUpperCase() && isNaN(+letter))
  const isLowercaseExist = !password
    .split('')
    .some(letter => letter == letter.toLowerCase() && isNaN(+letter))

  if (isUppercaseExist || isLowercaseExist) {
    return 'Password must contain uppercase and lowercase letters'
  }

  if (!password.split('').some(letter => numbers.includes(+letter))) {
    return 'Password must contain at least one number'
  }

  if (!password.split('').some(letter => symbols.includes(letter))) {
    return 'Password must contain at least one special character'
  }

  return 'Password accepted'
}

console.log(validatePassword('Adminaaa1$', 'Adminaaa1$'))
