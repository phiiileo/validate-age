const ValidationError = require(`../helpers/ValidationError.js`);

//gets the dob request, calculate and return age
const calaculateAge = (dob) => {
  //check if dob is passed
  if (!dob) throw new ValidationError(`Please pass date of birth to continue`);
  // try pass dob
  let dobformated = new Date(dob);
  //check if dob passed is string date format
  if (dobformated == `Invalid Date`) {
    // convert dob to number
    const dobinnumber = Number(dob);
    // check if number is less than 0
    if (dobinnumber < 1)
      throw new ValidationError(`dob cannot be lesser than 1`);
    // try pass dob if it's the number(milliseconds) format
    dobformated = new Date(dobinnumber);
    // return error is dob passed is invalid
    if (dobformated == `Invalid Date`)
      throw new ValidationError(`Please pass a valid date to continue`);
  }
  const today = new Date();
  //get the time difference
  const timedifference = today - dobformated;
  if (timedifference < 0)
    throw new ValidationError(
      `Your date of birth cannot be greater than the current year`
    );
  // get age
  const age = computeAge(dobformated, today);
  return age;
};

// compute age from dob
const computeAge = (dob, now) => {
  let age = now.getFullYear() - dob.getFullYear();
  const month = now.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
};
module.exports = {
  calaculateAge,
};
