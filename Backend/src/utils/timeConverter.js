module.exports = (str) => {
  const unit = str.at(-1);
  const value = parseInt(str);

  switch (unit) {
    case "s":
      return value;
    case "m":
      return value * 60;
    case "h":
      return value * 60 * 60;
    case "d":
      return value * 60 * 60 * 24;
    case "w":
      return value * 60 * 60 * 24 * 7;
    default:
      throw new Error("Invalid unit of time Use s,m,h,d,w");
  }
};
