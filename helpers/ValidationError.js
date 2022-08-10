class ValidationError extends Error {
  constructor(message, statuscode = null) {
    super(message);
    this.name = `ValidationError`;
    this.statuscode = statuscode;
  }
}


module.exports = ValidationError;
