const express = require("express");
const router = express.Router();
// --------------------------------------------------------------  
const indexRouter = require("./routes/index.js");
const engagementSuccess = require("./routes/engagement-success.js");
const engagementRouter = require("./routes/engagement.js");
const profileRouter = require("./routes/profile.js");
const searchRouter = require("./routes/search.js");
const policyRouter = require("./routes/policy.js");
// -------------------------------------------------------------- /engagement
router.get("/", indexRouter);
// -------------------------------------------------------------- /engagement
router.get("/engagement/anonymous", engagementSuccess);
router.get("/engagement/:step?", engagementRouter);
// -------------------------------------------------------------- /search
router.get("/search/:result?", searchRouter);
// -------------------------------------------------------------- /profile
router.get("/profile/:type?", profileRouter);
// -------------------------------------------------------------- /profile
router.get("/policy/:step?", policyRouter);
// -------------------------------------------------------------- export
module.exports = router;