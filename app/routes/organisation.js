const organisationRouter = (req, res) => {
    const { id } = req.params;
    const engagements = require("../data/data.engagements.json");
    const organisations = require("../data/data.organisations.json");
    const stakeholders = require("../data/data.stakeholders.json");
    const regions = require("../data/data.regions.json");

    let template = "organisation/index";

    let params = {
        currentpath: req.path,
        params: req.params,
        backButton: '/'
    };

    params.organisation = organisations.find(({ uid }) => uid == id); 
    params.stakeholders = stakeholders.filter(({ organisation }) => organisation == id);
    params.engagements = engagements.filter(({ organisation }) => organisation == id);
    params.region = regions[params.organisation.region];

    res.render(template, params);
};

module.exports = organisationRouter;
