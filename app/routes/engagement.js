const engagementRouter = (req, res) => {
    const { step } = req.params;
    let template = "engagement/index";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/engagement'
    };

    // template
    if (step != undefined) {
        template = `engagement/${step}`;
    };
    // backbutton
    if (req.session.data['stakeholder_radio_successful-contact'] === 'yes') {
      params.backButton = step === 'next-steps' ? '/engagement/summary' : '/engagement'
    }
    
    res.render(template, params);
  };
  
  module.exports = engagementRouter;
  