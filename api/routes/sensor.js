import express from "express";
import {
  userData,
  createSensor1,
  createSensor2,
  createSensor3,
  createSensor4,
  createSensor5,
  createSensor6,
  createSensor7,
  createSensor8,
  createSensor9,
  createSensor10,
  deleteSensor,
  getAllSensor,
  getSensor,
  getUpdatedSensor,
  updateSensor,
  userRegister,
  getInitialSensor,
  getSensor1,
  getSensor2,
  getSensor3,
  getSensor4,
  getSensor5,
  getSensor6,
  getSensor7,
  getSensor8,
  getSensor9,
  getSensor10,
  getTime,
  getFullSensor1,
  getFullSensor2,
  getFullSensor3,
  getFullSensor4,
  getFullSensor5,
  getFullSensor6,
  getFullSensor7,
  getFullSensor8,
  getFullSensor9,
  getFullSensor10,
  getAllCollection,
} from "../controllers/sensor.js";

const router = express.Router();

//register
router.post("/register", userRegister);

//login
router.post("/login", userData);

//create
router.get("/setbusbar1", createSensor1);
router.get("/setbusbar2", createSensor2);
router.get("/setbusbar3", createSensor3);
router.get("/setbusbar4", createSensor4);
router.get("/setbusbar5", createSensor5);
router.get("/setbusbar6", createSensor6);
router.get("/setbusbar7", createSensor7);
router.get("/setbusbar8", createSensor8);
router.get("/setbusbar9", createSensor9);
router.get("/setbusbar10", createSensor10);

//update
router.put("/:id", updateSensor);

//get sensors
router.get("/getsensor1", getSensor1);
router.get("/getsensor2", getSensor2);
router.get("/getsensor3", getSensor3);
router.get("/getsensor4", getSensor4);
router.get("/getsensor5", getSensor5);
router.get("/getsensor6", getSensor6);
router.get("/getsensor7", getSensor7);
router.get("/getsensor8", getSensor8);
router.get("/getsensor9", getSensor9);
router.get("/getsensor10", getSensor10);

//get full sensors
router.get("/getfullsensorModel1", getFullSensor1);
router.get("/getfullsensorModel2", getFullSensor2);
router.get("/getfullsensorModel3", getFullSensor3);
router.get("/getfullsensorModel4", getFullSensor4);
router.get("/getfullsensorModel5", getFullSensor5);
router.get("/getfullsensorModel6", getFullSensor6);
router.get("/getfullsensorModel7", getFullSensor7);
router.get("/getfullsensorModel8", getFullSensor8);
router.get("/getfullsensorModel9", getFullSensor9);
router.get("/getfullsensorModel10", getFullSensor10);

//delete
router.delete("/:id", deleteSensor);

//get
router.get("/find/:id", getSensor);

//getAll
router.get("/find", getAllSensor);

//getinitial
router.get("/initial", getInitialSensor);

//getUpdatedSensor
router.get("/updated", getUpdatedSensor);

//getTime
router.get("/gettime", getTime);

//getAllCollections
router.get("/getAllcollection", getAllCollection)

export default router;

