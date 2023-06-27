import express from "express";
import ParkingEntrance from "../controller/parkingController.js";

const router = express.Router();

router.get("/estacionamento", ParkingEntrance.listEntry);

router.get("/estacionamento/:id", ParkingEntrance.listIdEntry);

router.post("/estacionamento", ParkingEntrance.registerEntry);

router.put("/estacionamento/:id", ParkingEntrance.updateEntry);

router.delete("/estacionamento/:id", ParkingEntrance.deleteEntry);

export default router;
