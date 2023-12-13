import sensor from "../model/sensorModel.js";
import sensorModel1 from "../model/sensorModel1.js";
import sensorModel2 from "../model/sensorModel2.js";
import sensorModel3 from "../model/sensorModel3.js";
import sensorModel4 from "../model/sensorModel4.js";
import sensorModel5 from "../model/sensorModel5.js";
import sensorModel6 from "../model/sensorModel6.js";
import sensorModel7 from "../model/sensorModel7.js";
import sensorModel8 from "../model/sensorModel8.js";
import sensorModel9 from "../model/sensorModel9.js";
import sensorModel10 from "../model/sensorModel10.js";
import timeModel from "../model/timeModel.js";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

//Register
export const userRegister = async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hash(req.body.parssword, 10);
    await User.create({
      email: req.body.email,
      password: newPassword,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

//login
export const userData = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return { status: "error", error: "Invalid User" };
  }
  const isPasswordVaild = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (isPasswordVaild) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
};

//Create
export const createSensor = async (req, res) => {
  const {
    id,
    sensor1,
    sensor2,
    sensor3,
    sensor4,
    sensor5,
    sensor6,
    sensor7,
    sensor8,
    sensor9,
    sensor10,
    sensor11,
    sensor12,
    sensor13,
    sensor14,
    sensor15,
    sensor16,
    sensor17,
    sensor18,
    sensor19,
    sensor20,
    sensor21,
    sensor22,
    sensor23,
    sensor24,
    sensor25,
    sensor26,
    sensor27,
    sensor28,
    sensor29,
    sensor30,
    sensor31,
    sensor32,
    sensor33,
    sensor34,
    sensor35,
    sensor36,
    sensor37,
    sensor38,
    sensor39,
    sensor40,
    time,
    // sensor41, sensor42, sensor43, sensor44, sensor45, sensor46, sensor47, sensor48, sensor49, sensor50,
    // sensor51, sensor52, sensor53, sensor54, sensor55, sensor56, sensor57, sensor58, sensor59, sensor60,
    // sensor61, sensor62, sensor63, sensor64, sensor65, sensor66, sensor67, sensor68, sensor69, sensor70,
    // sensor71, sensor72, sensor73, sensor74, sensor75, sensor76, sensor77, sensor78, sensor79, sensor80,
    // sensor81, sensor82, sensor83, sensor84, sensor85, sensor86, sensor87, sensor88, sensor89, sensor90,
    // sensor91, sensor92, sensor93, sensor94, sensor95, sensor96, sensor97, sensor98, sensor99, sensor100,
    // sensor101, sensor102, sensor103, sensor104, sensor105, sensor106, sensor107, sensor108
  } = req.query;

  try {
    const newSensor = new sensor({
      id: String(id),
      sensor1: String(sensor1),
      sensor2: String(sensor2),
      sensor3: String(sensor3),
      sensor4: String(sensor4),
      sensor5: String(sensor5),
      sensor6: String(sensor6),
      sensor7: String(sensor7),
      sensor8: String(sensor8),
      sensor9: String(sensor9),
      sensor10: String(sensor10),

      sensor11: String(sensor11),
      sensor12: String(sensor12),
      sensor13: String(sensor13),
      sensor14: String(sensor14),
      sensor15: String(sensor15),
      sensor16: String(sensor16),
      sensor17: String(sensor17),
      sensor18: String(sensor18),
      sensor19: String(sensor19),
      sensor20: String(sensor20),

      sensor21: String(sensor21),
      sensor22: String(sensor22),
      sensor23: String(sensor23),
      sensor24: String(sensor24),
      sensor25: String(sensor25),
      sensor26: String(sensor26),
      sensor27: String(sensor27),
      sensor28: String(sensor28),
      sensor29: String(sensor29),
      sensor30: String(sensor30),

      sensor31: String(sensor31),
      sensor32: String(sensor32),
      sensor33: String(sensor33),
      sensor34: String(sensor34),
      sensor35: String(sensor35),
      sensor36: String(sensor36),
      sensor37: String(sensor37),
      sensor38: String(sensor38),
      sensor39: String(sensor39),
      sensor40: String(sensor40),

      time: String(time),

      // sensor41: Number(sensor41),
      // sensor42: Number(sensor42),
      // sensor43: Number(sensor43),
      // sensor44: Number(sensor44),
      // sensor45: Number(sensor45),
      // sensor46: Number(sensor46),
      // sensor47: Number(sensor47),
      // sensor48: Number(sensor48),
      // sensor49: Number(sensor49),
      // sensor50: Number(sensor50),

      // sensor51: Number(sensor51),
      // sensor52: Number(sensor52),
      // sensor53: Number(sensor53),
      // sensor54: Number(sensor54),
      // sensor55: Number(sensor55),
      // sensor56: Number(sensor56),
      // sensor57: Number(sensor57),
      // sensor58: Number(sensor58),
      // sensor59: Number(sensor59),
      // sensor60: Number(sensor60),

      // sensor61: Number(sensor61),
      // sensor62: Number(sensor62),
      // sensor63: Number(sensor63),
      // sensor64: Number(sensor64),
      // sensor65: Number(sensor65),
      // sensor66: Number(sensor66),
      // sensor67: Number(sensor67),
      // sensor68: Number(sensor68),
      // sensor69: Number(sensor69),
      // sensor70: Number(sensor70),

      // sensor71: Number(sensor71),
      // sensor72: Number(sensor72),
      // sensor73: Number(sensor73),
      // sensor74: Number(sensor74),
      // sensor75: Number(sensor75),
      // sensor76: Number(sensor76),
      // sensor77: Number(sensor77),
      // sensor78: Number(sensor78),
      // sensor79: Number(sensor79),
      // sensor80: Number(sensor80),

      // sensor81: Number(sensor81),
      // sensor82: Number(sensor82),
      // sensor83: Number(sensor83),
      // sensor84: Number(sensor84),
      // sensor85: Number(sensor85),
      // sensor86: Number(sensor86),
      // sensor87: Number(sensor87),
      // sensor88: Number(sensor88),
      // sensor89: Number(sensor89),
      // sensor90: Number(sensor90),

      // sensor91: Number(sensor91),
      // sensor92: Number(sensor92),
      // sensor93: Number(sensor93),
      // sensor94: Number(sensor94),
      // sensor95: Number(sensor95),
      // sensor96: Number(sensor96),
      // sensor97: Number(sensor97),
      // sensor98: Number(sensor98),
      // sensor99: Number(sensor99),
      // sensor100: Number(sensor100),

      // sensor101: Number(sensor101),
      // sensor102: Number(sensor102),
      // sensor103: Number(sensor103),
      // sensor104: Number(sensor104),
      // sensor105: Number(sensor105),
      // sensor106: Number(sensor106),
      // sensor107: Number(sensor107),
      // sensor108: Number(sensor108),
    });

    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor1
export const createSensor1 = async (req, res) => {
  const {
    id,
    sensor1,
    sensor2,
    sensor3,
    sensor4,
    sensor5,
    sensor6,
    sensor7,
    sensor8,
    sensor9,
    sensor10,
    sensor11,
    sensor12,
    sensor13,
    sensor14,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel1({
      id: String(id),
      CBT1A1: String(sensor1),
      CBT1A2: String(sensor2),
      CBT2A1: String(sensor3),
      CBT2A2: String(sensor4),
      CBT3A1: String(sensor5),
      CBT3A2: String(sensor6),
      CBT4A1: String(sensor7),
      CBT4A2: String(sensor8),
      CBT5A1: String(sensor9),
      CBT5A2: String(sensor10),
      CBT6A1: String(sensor11),
      CBT6A2: String(sensor12),
      CBT7A1: String(sensor13),
      CBT7A2: String(sensor14),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor2
export const createSensor2 = async (req, res) => {
  const {
    id,
    sensor15,
    sensor16,
    sensor17,
    sensor18,
    sensor19,
    sensor20,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel2({
      id: String(id),
      CBT8A1: String(sensor15),
      CBT8A2: String(sensor16),
      CBT9A1: String(sensor17),
      CBT9A2: String(sensor18),
      CBT10A1: String(sensor19),
      CBT10A2: String(sensor20),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor3
export const createSensor3 = async (req, res) => {
  const {
    id,
    sensor21,
    sensor22,
    sensor23,
    sensor24,
    sensor25,
    sensor26,
    sensor27,
    sensor28,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel3({
      id: String(id),
      CBT11A1: String(sensor21),
      CBT11A2: String(sensor22),
      CBT12A1: String(sensor23),
      CBT12A2: String(sensor24),
      CBT13A1: String(sensor25),
      CBT13A2: String(sensor26),
      CBT14A1: String(sensor27),
      CBT14A2: String(sensor28),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor4
export const createSensor4 = async (req, res) => {
  const {
    id,
    sensor29,
    sensor30,
    sensor31,
    sensor32,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel4({
      id: String(id),
      CBT15A1: String(sensor29),
      CBT15A2: String(sensor30),
      CBT16A1: String(sensor31),
      CBT16A2: String(sensor32),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor5
export const createSensor5 = async (req, res) => {
  const {
    id,
    sensor33,
    sensor34,
    sensor35,
    sensor36,
    sensor37,
    sensor38,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel5({
      id: String(id),
      CBT17A1: String(sensor33),
      CBT17A2: String(sensor34),
      CBT18A1: String(sensor35),
      CBT18A2: String(sensor36),
      CBT19A1: String(sensor37),
      CBT19A2: String(sensor38),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor6
export const createSensor6 = async (req, res) => {
  const {
    id,
    sensor39,
    sensor40,
    sensor41,
    sensor42,
    sensor43,
    sensor44,
    sensor45,
    sensor46,
    sensor47,
    sensor48,
    sensor49,
    sensor50,
    sensor51,
    sensor52,
    sensor53,
    sensor54,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel6({
      id: String(id),
      CBT20A1: String(sensor39),
      CBT20A2: String(sensor40),
      CBT21A1: String(sensor41),
      CBT21A2: String(sensor42),
      CBT22A1: String(sensor43),
      CBT22A2: String(sensor44),
      CBT23A1: String(sensor45),
      CBT23A2: String(sensor46),
      CBT24A1: String(sensor47),
      CBT24A2: String(sensor48),
      CBT25A1: String(sensor49),
      CBT25A2: String(sensor50),
      CBT26A1: String(sensor51),
      CBT26A2: String(sensor52),
      CBT27A1: String(sensor53),
      CBT27A2: String(sensor54),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor7
export const createSensor7 = async (req, res) => {
  const {
    id,
    sensor55,
    sensor56,
    sensor57,
    sensor58,
    sensor59,
    sensor60,
    sensor61,
    sensor62,
    sensor63,
    sensor64,
    sensor65,
    sensor66,
    sensor67,
    sensor68,
    sensor69,
    sensor70,
    sensor71,
    sensor72,
    sensor73,
    sensor74,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel7({
      id: String(id),
      CBT1B1: String(sensor55),
      CBT1B2: String(sensor56),
      CBT2B1: String(sensor57),
      CBT2B2: String(sensor58),
      CBT3B1: String(sensor59),
      CBT3B2: String(sensor60),
      CBT4B1: String(sensor61),
      CBT4B2: String(sensor62),
      CBT5B1: String(sensor63),
      CBT5B2: String(sensor64),
      CBT6B1: String(sensor65),
      CBT6B2: String(sensor66),
      CBT7B1: String(sensor67),
      CBT7B2: String(sensor68),
      CBT8B1: String(sensor69),
      CBT8B2: String(sensor70),
      CBT9B1: String(sensor71),
      CBT9B2: String(sensor72),
      CBT10B1: String(sensor73),
      CBT10B2: String(sensor74),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor8
export const createSensor8 = async (req, res) => {
  const {
    id,
    sensor75,
    sensor76,
    sensor77,
    sensor78,
    sensor79,
    sensor80,
    sensor81,
    sensor82,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel8({
      id: String(id),
      CBT11B1: String(sensor75),
      CBT11B2: String(sensor76),
      CBT12B1: String(sensor77),
      CBT12B2: String(sensor78),
      CBT13B1: String(sensor79),
      CBT13B2: String(sensor80),
      CBT14B1: String(sensor81),
      CBT14B2: String(sensor82),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor9
export const createSensor9 = async (req, res) => {
  const {
    id,
    sensor83,
    sensor84,
    sensor85,
    sensor86,
    sensor87,
    sensor88,
    sensor89,
    sensor90,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel9({
      id: String(id),
      CBT15B1: String(sensor83),
      CBT15B2: String(sensor84),
      CBT16B1: String(sensor85),
      CBT16B2: String(sensor86),
      CBT17B1: String(sensor87),
      CBT17B2: String(sensor88),
      CBT18B1: String(sensor89),
      CBT18B2: String(sensor90),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//sensor10
export const createSensor10 = async (req, res) => {
  const {
    id,
    sensor91,
    sensor92,
    sensor93,
    sensor94,
    sensor95,
    sensor96,
    sensor97,
    sensor98,
    sensor99,
    sensor100,
    sensor101,
    sensor102,
    sensor103,
    sensor104,
    sensor105,
    sensor106,
    sensor107,
    sensor108,
    time,
  } = req.query;

  try {
    const newSensor = new sensorModel10({
      id: String(id),
      CBT19B1: String(sensor91),
      CBT19B2: String(sensor92),
      CBT20B1: String(sensor93),
      CBT20B2: String(sensor94),
      CBT21B1: String(sensor95),
      CBT21B2: String(sensor96),
      CBT22B1: String(sensor97),
      CBT22B2: String(sensor98),
      CBT23B1: String(sensor99),
      CBT23B2: String(sensor100),
      CBT24B1: String(sensor101),
      CBT24B2: String(sensor102),
      CBT25B1: String(sensor103),
      CBT25B2: String(sensor104),
      CBT26B1: String(sensor105),
      CBT26B2: String(sensor106),
      CBT27B1: String(sensor107),
      CBT27B2: String(sensor108),
      TIME: String(time),
    });
    const saveSensor = await newSensor.save();
    res.status(200).json(saveSensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//update
export const updateSensor = async (req, res) => {
  try {
    const updatesensor = await sensor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatesensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete
export const deleteSensor = async (req, res) => {
  try {
    const deletesensor = await sensor.findByIdAndDelete(req.params.id);
    res.status(200).json(deletesensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get
export const getSensor = async (req, res) => {
  try {
    const getsensor = await sensor.findById(req.params.id);
    res.status(200).json(getsensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//getAll
export const getAllSensor = async (req, res) => {
  try {
    const getallsensor = await sensor
      .find()
      .sort({ updatedAt: -1 })
      .limit(5000);
    res.status(200).json(getallsensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get500
export const getInitialSensor = async (req, res) => {
  try {
    const getallsensor = await sensor.find().sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getallsensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//getsensor
export const getUpdatedSensor = async (req, res) => {
  try {
    const getupdatedsensor = await sensor
      .find()
      .sort({ updatedAt: -1 })
      .limit(1);
    res.status(200).json(getupdatedsensor);
  } catch (error) {
    res.status(500).json(error);
  }
};

//getSensor1
export const getSensor1 = async (req, res) => {
  try {
    const getsensor1 = await sensorModel1
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor1);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor2
export const getSensor2 = async (req, res) => {
  try {
    const getsensor2 = await sensorModel2
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor2);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor3
export const getSensor3 = async (req, res) => {
  try {
    const getsensor3 = await sensorModel3
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor3);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor4
export const getSensor4 = async (req, res) => {
  try {
    const getsensor4 = await sensorModel4
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor4);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor5
export const getSensor5 = async (req, res) => {
  try {
    const getsensor5 = await sensorModel5
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor5);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor6
export const getSensor6 = async (req, res) => {
  try {
    const getsensor6 = await sensorModel6
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor6);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor7
export const getSensor7 = async (req, res) => {
  try {
    const getsensor7 = await sensorModel7
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor7);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor8
export const getSensor8 = async (req, res) => {
  try {
    const getsensor8 = await sensorModel8
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor8);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor9
export const getSensor9 = async (req, res) => {
  try {
    const getsensor9 = await sensorModel9
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor9);
  } catch (error) {
    res.status(500).json(error);
  }
};
//getSensor10
export const getSensor10 = async (req, res) => {
  try {
    const getsensor10 = await sensorModel10
      .find()
      .sort({ updatedAt: -1 }).limit(1);
    res.status(200).json(getsensor10);
  } catch (error) {
    res.status(500).json(error);
  }
};

//time based selection
export const getTime = async (req, res) => {
  const {
    start,
    end,
    busbar,
  }= req.query;

  try {
    const newTime = new timeModel({
      start_time: String(start),
      end_time: String(end),
      busbar: String(busbar)
    });
    const saveTime = await newTime.save();
    const startTime = saveTime.start_time;
    const endTime = saveTime.end_time;
    const Busbar = saveTime.busbar;
    // console.log(startTime, endTime, Busbar);

    const events = await mongoose.model(Busbar).find({
      $and: [
        { TIME: { $gte: startTime } },
        { TIME: { $lte: endTime } }
      ]
    }).limit(500);

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error);
  }
}

//full link
export const getFullSensor1 = async (req, res) => {
  try {
    const getfullsensor1 = await sensorModel1
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor1);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor2 = async (req, res) => {
  try {
    const getfullsensor2 = await sensorModel2
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor2);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor3 = async (req, res) => {
  try {
    const getfullsensor3 = await sensorModel3
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor3);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor4 = async (req, res) => {
  try {
    const getfullsensor4 = await sensorModel4
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor4);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor5 = async (req, res) => {
  try {
    const getfullsensor5 = await sensorModel5
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor5);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor6 = async (req, res) => {
  try {
    const getfullsensor6 = await sensorModel6
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor6);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor7 = async (req, res) => {
  try {
    const getfullsensor7 = await sensorModel7
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor7);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor8 = async (req, res) => {
  try {
    const getfullsensor8 = await sensorModel8
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor8);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor9 = async (req, res) => {
  try {
    const getfullsensor9 = await sensorModel9
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor9);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getFullSensor10 = async (req, res) => {
  try {
    const getfullsensor10 = await sensorModel10
      .find()
      .sort({ updatedAt: -1 }).limit(500);
    res.status(200).json(getfullsensor10);
  } catch (error) {
    res.status(500).json(error);
  }
};

// //getAllCollection
// export const getAllCollection = async (req,res) => {
//   const getAllData = [];

//   try {
//     const getAllsensor1 = await sensorModel1
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor1)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   try {
//     const getAllsensor2 = await sensorModel2
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor2)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   try {
//     const getAllsensor3 = await sensorModel3
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor3)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   try {
//     const getAllsensor4 = await sensorModel4
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor4)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   try {
//     const getAllsensor5 = await sensorModel5
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor5)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   try {
//     const getAllsensor6 = await sensorModel6
//       .find()
//       .sort({ updatedAt: -1 }).limit(500);
//       getAllData.push(getAllsensor6)
//     // res.status(200).json(getfullsensor1);
//   } catch (error) {
//     res.status(500).json(error);
//   }
//   res.status(200).json(getAllData);
// }

// getAllCollection
export const getAllCollection = async (req, res) => {
  const getAllData = [];
  const collectionModels = [sensorModel1, sensorModel2, sensorModel3, sensorModel4, sensorModel5, sensorModel6, sensorModel7, sensorModel8, sensorModel9, sensorModel10];
  const limitPerModel = 50; // Adjust the limit as needed

  for (let i = 0; i < limitPerModel; i++) {
    const documentsInIteration = [];

    for (const model of collectionModels) {
      try {
        const documentFromModel = await model
          .findOne()
          .sort({ updatedAt: 1 })
          .skip(i);

        if (documentFromModel) {
          documentsInIteration.push(documentFromModel);
        }
      } catch (error) {
        res.status(500).json(error);
      }
    }

    getAllData.push(documentsInIteration);
  }

  res.status(200).json(getAllData);
};


