export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const key in args) {
    if (Object.prototype.hasOwnProperty.call(args, key)) {
      total += 1;
    }
  }
  return total;
}
