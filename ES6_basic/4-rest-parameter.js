export default function returnHowManyArguments(...args) {
  let total = 0;
  if (args != null) {
    for (const arg in args){
      total += 1;
    }
  }
  return total
}
