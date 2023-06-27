import express from "express";
import parking from "./parkingRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Bem-vindo ao App Parking");
  });
  app.use(express.json());
  app.use(parking);
};

export default routes;
