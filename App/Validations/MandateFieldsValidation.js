const areFieldsFilled = (...fields) =>
  fields.every(currentValue => currentValue);

export { areFieldsFilled };
