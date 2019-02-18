const indexRouter = (req, res) => {
    let template = "index";
    const engagements =  require("../data/data.engagements.json");
    const organisations =  require("../data/data.organisations.json");
    const policies =  require("../data/data.policies.json");
    const regions =  require("../data/data.regions.json");
    const stakeholders =  require("../data/data.stakeholders.json");
    const history = 3;
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/',
      entries : [],
      regions,
      policies
    };
    
    engagements.slice(0, history).forEach(function (engagement, i) {
      const { summary, date, anonymous, staff, stakeholder, organisation } = engagement;

      let entry = {
        date, summary, staff,
        name : 'Anonymous'
      };

      let filteredStakeholder = stakeholders.filter(({uid}) => uid === stakeholder);
      let filteredOrganisation = organisations.filter(({uid}) => uid === organisation);
      if(anonymous == 'no') {
        entry.name = filteredStakeholder[0].name.fullName;
        entry.organisation = filteredOrganisation[0].name;
      } else {
        entry.organisation = filteredOrganisation[0].type;
      }

      params.entries.push(entry);
    });
    
    res.render(template, params);
  };
  
  module.exports = indexRouter;
