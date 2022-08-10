const ValidationError = require(`../helpers/ValidationError.js`)

//gets the dob request, calculate and return age
const calaculateAge = (dob) => {
  //check if dob is passed
  if (!dob) throw new ValidationError(`Please pass date of birth to continue`)
  // try pass dob
  let dobformated = new Date(dob)
  //check if dob passed is string date format
  if (dobformated == `Invalid Date`) {
    // convert dob to number
    const dobinnumber = Number(dob)
    // check if number is less than 0
    if (dobinnumber < 1)
      throw new ValidationError(`dob cannot be lesser than 1`)
    // try pass dob if it's the number(milliseconds) format
    dobformated = new Date(dobinnumber)
    // return error is dob passed is invalid
    if (dobformated == `Invalid Date`)
      throw new ValidationError(`Please pass a valid date to continue`)
  }
  const year = getAge(dobformated)
  if (year < 0)
    throw new ValidationError(
      `Your date of birth cannot be greater than the current year`,
    )
  return year
}

const computeAgeHandler = (birthDate) => {
  var today = new Date()
  var age = today.getFullYear() - birthDate.getFullYear()
  var m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

function getAge(birthDate) {
  var now = new Date()
  function isLeap(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
  }

  // days since the birthdate
  var days = Math.floor(
    (now.getTime() - birthDate.getTime()) / 1000 / 60 / 60 / 24,
  )
  var age = 0
  // iterate the years
  for (var y = birthDate.getFullYear(); y <= now.getFullYear(); y++) {
    var daysInYear = isLeap(y) ? 366 : 365
    if (days >= daysInYear) {
      days -= daysInYear
      age++;
      // increment the age only if there are available enough days for the year.
    }
  }
  return age
}
module.exports = {
  calaculateAge,
}
//436504400000, 1437627600000, 756864000000, 1661058000000, 1108965600000, 975823200000
