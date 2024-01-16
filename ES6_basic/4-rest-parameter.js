export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const key in args) {
    if (args.hasOwnProperty(key)) {
      total += 1;
    }
  }
  return total;
}
