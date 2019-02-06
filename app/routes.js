const express = require("express");
const router = express.Router();
// -------------------------------------------------------------- Stakeholder Engagament
const engagementSuccess = require("./routes/engagement-success.js");
const engagementOverview = require("./routes/engagement-overview.js");
const engagementRouter = require("./routes/engagement.js");
// -------------------------------------------------------------- /engagement
router.get("/engagement/anonymous", engagementSuccess);
router.get("/engagement/overview", engagementOverview);
router.get("/engagement/:step?", engagementRouter);
// -------------------------------------------------------------- export
module.exports = router;