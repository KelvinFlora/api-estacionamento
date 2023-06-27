function timeCalc(checkIn, checkOut) {
  const difference = checkOut.getTime() - checkIn.getTime();
  const totalHours = difference / (1000 * 60 * 60);
  return totalHours;
}

export default timeCalc;
