const policyRouter = (req, res) => {
    const { step } = req.params;
    let template = "policy/index";

    const policies =  require("../data/data.policies.json");
    const regions =  require("../data/data.regions.json");
    const engagements =  require("../data/data.engagements.json");
    const stakeholders =  require("../data/data.stakeholders.json");
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/',
      page: {
        title: policies[step]
      },
      entries : []
    };
    engagements.forEach(function (engagement, i) {
      const { summary, themes, date, staff, anonymous } = engagement;
      
      if(themes.includes(step)) {
          let entry = {
            themes,
            summary,
            date,
            staff
          };

          stakeholders.filter(function (stakeholder) {
            if(stakeholder.uid === engagement.stakeholder) {
              const { organisation, name, role, uid } = stakeholder;

              if(anonymous === 'no') {
                entry.stakeholder = {
                  name : name.fullName,
                  organisation : organisation,
                  role, uid
                }
              } else {
                entry.stakeholder = {
                  name : 'Anonymous',
                  organisation : organisation.type,
                  role
                }
              }
            }
          });

          params.entries.push(entry);
      } 
    });

    res.render(template, params);
  };
  
  module.exports = policyRouter;
