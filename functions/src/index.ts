import * as functions from "firebase-functions"
import https = require("https")
import fs = require("fs")
import path = require("path")
import c = require("cors")

const cors = c({ origin: true })

interface Category {
  [index: string]: string;
}
const CATEGORY_IDS = {} as Category
CATEGORY_IDS["condition"] = "1,12,13,14,90"
CATEGORY_IDS["env"] = "21,90"
CATEGORY_IDS["pass"] = "41,43,44,90"

const BASE_URL = "https://trafficmapsrgssr.trafficintelligence.ch/api/event/GetEventsTrafficApi/46.27634554693529,5.704062499999999,47.120753018933755,12.3009375/"

export const trafficInfo = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    let data = ""
    if (request.body && request.body.data) {
      const category = request.body.data.category
      const url = BASE_URL + CATEGORY_IDS[category] + "/1/5/2"

      if (!process.env.OVERRIDE_DEBUG_MODE &&
        process.env.IS_FIREBASE_CLI &&
        process.env.FIREBASE_DEBUG_MODE) {
        const sampleFile = path.resolve("./sample_data.json")
        const sample = JSON.parse(fs.readFileSync(sampleFile, "utf8"))
        response.status(200).send({
          "status": "success",
          "data": sample,
        })
      } else {
        https.get(url, (res: any) => {
          res.on("data", (d: any) => {
            data += d
          })
          res.on("end", () => response.status(200).send({
            "status": "success",
            "data": JSON.parse(data),
          }))
          res.on("error", () => response.sendStatus(400))
        })
      }
    } else {
      response.sendStatus(204)
    }
  })
})
