export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const _ in args){
    total += 1;
  }
  return total
}
