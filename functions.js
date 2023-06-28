function timeCalc(checkIn, checkOut) {
  const difference = checkOut.getTime() - checkIn.getTime();
  const totalHours = difference / (1000 * 60 * 60);
  return totalHours;
}

const price = 10;

calculateTotalTime().catch((error) => {
  console.error("Ocorreu um erro:", error);
});

function payCalc(totalTime, price) {
  const result = totalTime * price;
  console.log("O preço a ser pago é de: R$ ", result, ".");
}

export default timeCalc;
