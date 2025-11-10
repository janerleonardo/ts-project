(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  };

  const calcTotalString = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  let arrayNumber: number[] = [1, 2, 3, 4, 5, 6];
  const rta = calcTotal(arrayNumber);
  console.log(rta);
  const rta1 = calcTotalString(arrayNumber);
  console.log(rta1);

  function joinName(fName: string, lName: string): string {
    return `${fName} ${lName}`;
  }

  // Funcion sin retorno
  function printName(name: string): void {
    console.log(name);
  }
  console.log(joinName("Janer", "Tegue"));
  printName("JANER");
})();
