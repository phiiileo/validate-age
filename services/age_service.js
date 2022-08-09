const ValidationError = require(`../helpers/ValidationError.js`);

//gets the dob request, calculate and return age
const calaculateAge = (dob) => {
  //check if dob is passed
  if (!dob) throw new ValidationError(`Please pass date of birth to continue`);
  // try pass dob
  let dobformated = new Date(dob);
  //check if dob passed is string date format
  if (dobformated == `Invalid Date`) {
    // try pass dob if it's the number(milliseconds) format
    dobformated = new Date(Number(dob));
    // return error is dob passed is invalid
    if (dobformated == `Invalid Date`)
      throw new ValidationError(`Please pass a valid date to continue`);
  }
  //get the time difference
  const timedifference = Date.now() - dobformated;
  if (timedifference < 0)
    throw new ValidationError(
      `Your date of birth cannot be greater than the current year`
    );
  //get the time difference date
  const differencedate = new Date(timedifference);
  //get age year
  const ageyear = differencedate.getUTCFullYear();
  //get and return the year difference (age)
  return Math.abs(ageyear - 1970);}
module.exports = {
  calaculateAge,
}
