const express = require("express");
const {handleGenerateUrl,handlerGoto,handlerGetanalytics} = require("../controllers/url");

const router = express.Router();

router.post("/",handleGenerateUrl);

router.get("/:shortId",handlerGoto);


router.get("/analytics/:shortId",handlerGetanalytics)
module.exports = router