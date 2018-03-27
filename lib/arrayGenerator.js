const arrayGenerator = (length, max) => [...new Array(length)]
  .map(() => Math.round(Math.random() * max));

module.exports = arrayGenerator;