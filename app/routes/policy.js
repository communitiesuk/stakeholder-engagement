const policyRouter = (req, res) => {
    const { step } = req.params;
    let template = "policy/index";

    const policies =  require("../data/data.policies.json");
    const regions =  require("../data/data.regions.json");
    const engagements =  require("../data/data.engagements.json");
    const stakeholders =  require("../data/data.stakeholders.json");
    const organisations = require("../data/data.organisations.json");
    const staff = require("../data/data.staff.json");
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/',
      page: {
        title: policies[step]
      },
      entries : [],
      filters : []
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
    // ================
    const stakeholderOptions = stakeholders.map(item => ({
      value: item.uid,
      text: item.name.fullName
    }));
    const organisationOptions = organisations.map(item => ({
      value: item.uid,
      text: item.name
    }));
    const staffOptions = staff.map(item => ({
      value: item.uid,
      text: item.name
    }));
    const policyOptions = Object.keys(policies).map(function (key, index) {
      return {
        value: key,
        text: policies[key]
    }});

    params.stakeholderOptions = [
      {
        text: "Select a stakeholder"
      },
      ...stakeholderOptions
    ];
    params.organisationOptions = [
      {
        text: "Select an organisation"
      },
      ...organisationOptions
    ];
    params.staffOptions = [
      {
        text: "Select staff"
      },
      ...staffOptions
    ];
    params.policyOptions = [
      {
        text: "Select a policy"
      },
      ...policyOptions
    ];
    // ================
    res.render(template, params);
  };
  
  module.exports = policyRouter;
