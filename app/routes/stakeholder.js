const stakeholderRouter = (req, res) => {
    const { id } = req.params;
    const engagements = require("../data/data.engagements.json");
    const organisations = require("../data/data.organisations.json");
    const stakeholders = require("../data/data.stakeholders.json");
    const regions = require("../data/data.regions.json");

    let template = "stakeholder/index";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/'
    };

  params.stakeholder = stakeholders.find(({ uid }) => uid == id);
  params.organisation = organisations.find(({ uid }) => uid == params.stakeholder.organisation);
  params.engagements = engagements.filter(({ stakeholder }) => stakeholder == id);
  params.region = regions[params.organisation.region];
    
    res.render(template, params);
  };
  
  module.exports = stakeholderRouter;
  