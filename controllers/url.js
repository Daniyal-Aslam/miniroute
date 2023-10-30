const shortid = require("shortid");
const URL = require('../models/url');

async function handleGenerateUrl(req,res){
    const body  = req.body;
    if(!body.url) return res.status(404).json(`error: URL is required`);
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({id:shortID});
}

async function handlerGoto(req,res){
    const shortId  = req.params.shortId;
    const entry =  await URL.findOneAndUpdate(
        {
            shortId,
        }, 
        {
            $push:{
                visitHistory: {
                    timestamp : Date.now(), 
                },
            },
        }
    );
    res.redirect(entry.redirectUrl);
}

async function handlerGetanalytics(req,res){
    const shortId  = req.params.shortId;
    const result  =  await URL.findOne({shortId});
    return res.json({
        totalClicks :result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {handleGenerateUrl,handlerGetanalytics,handlerGoto};