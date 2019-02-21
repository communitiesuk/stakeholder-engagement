const express = require("express");
const router = express.Router();
// --------------------------------------------------------------  
const indexRouter = require("./routes/index.js");
const engagementSuccess = require("./routes/engagement-success.js");
const engagementRouter = require("./routes/engagement.js");
const organisationRouter = require("./routes/organisation.js");
const policyRouter = require("./routes/policy.js");
const regionRouter = require("./routes/region.js");
const stakeholderRouter = require("./routes/stakeholder.js");
const searchRouter = require("./routes/search.js");
// -------------------------------------------------------------- /engagement
router.get("/", indexRouter);
// -------------------------------------------------------------- /engagement
router.get("/engagement/anonymous", engagementSuccess);
router.get("/engagement/:step?", engagementRouter);
// -------------------------------------------------------------- /search
router.get("/search/:result?", searchRouter);
// -------------------------------------------------------------- /profile
router.get("/stakeholder/:id?", stakeholderRouter);
// -------------------------------------------------------------- /organisation
router.get("/organisation/:id?", organisationRouter);
// -------------------------------------------------------------- /regions
router.get("/region/:id?", regionRouter);
// -------------------------------------------------------------- /policy
router.get("/policy/:step?", policyRouter);
// -------------------------------------------------------------- export
module.exports = router;