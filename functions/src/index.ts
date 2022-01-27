import * as functions from "firebase-functions";
import https = require("https");
import c = require("cors");
const cors = c({origin: true});

const URL = "https://trafficmapsrgssr.trafficintelligence.ch/api/event/GetEventsTrafficApi/46.27634554693529,5.704062499999999,47.120753018933755,12.3009375/11,12,13,14,90/1/5/2";

export const trafficInfo = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    let data = "";
    https.get(URL, (res: any) => {
      res.on("data", (d: any) => {
        data += d;
      });
      res.on("end", () => response.status(200).send({
        "status" : "success",
        "data" : data
      }));
      res.on("error", () => response.sendStatus(400));
    });
  });
});
