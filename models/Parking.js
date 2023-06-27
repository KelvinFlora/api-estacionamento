import mongoose from "mongoose";
import timeCalc from "../functions.js";

const ParkingInfo = new mongoose.Schema({
  licenseplate: { type: String, required: true },
  entrytime: { type: Date, required: true },
  exittime: { type: Date },
  carname: { type: String, required: true },
  totalTime: { type: Number },
  totalPrice: { type: Number },
});

const ParkingEntrance = mongoose.model("parkingregisters", ParkingInfo);

async function calculateTotalTime() {
  const parkingInfo = new ParkingEntrance({
    licenseplate: "ABC123",
    entrytime: new Date("2023-06-27T10:00:00"),
    exittime: new Date("2023-06-27T12:30:00"),
    carname: "Meu Carro",
  });

  const totalTime = timeCalc(parkingInfo.entrytime, parkingInfo.exittime);
  console.log("Tempo total de estacionamento: ", totalTime, "horas");

  const price = 10;
  payCalc(totalTime, price);
}

calculateTotalTime().catch((error) => {
  console.error("Ocorreu um erro:", error);
});

function payCalc(totalTime, price) {
  const result = totalTime * price;
  console.log("O preço a ser pago é de: R$ ", result, ".");
}

export default ParkingEntrance;
