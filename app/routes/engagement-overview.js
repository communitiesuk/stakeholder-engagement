const engagementOverview = (req, res) => {
    const { step } = req.params;
    let template = "engagement/overview";
    let params = {
      currentpath: req.path,
      params: req.params,
    };
    
    // backbutton
    if (req.session.data['stakeholder_radio_successful-contact'] === 'yes') {
      params.backButton = step === 'next-steps' ? '/engagement/summary' : '/engagement'
    };

    // input > output
    params.fields = [
            {
                field: "stakeholder-anonymous",
                type : 'checkbox'
            }, {
                field: "stakeholder-full-name",
                type : 'text'
            }, {
                field:  "stakeholder_date_contact",
                type : 'date'
            }, {
                field:  "stakeholder-successful-contact",
                type: 'checkbox'
            },{  
                field: "stakeholder-themes",
                type: 'checkbox'
            },{  
                field:  "stakeholder-summary-of-contact",
                type: 'textarea'
            },{  
                field: "stakeholder-notes",
                type: 'file'
            },{  
                field:  "stakeholder-other-theme",
                type: 'text'
            },{  
                field:  "stakeholder-send-email",
                type: 'checkbox'
            },{  
                field:  "stakeholder-actions",
                type: 'textarea'
            },{  
                field:  "stakeholder-escalated",
                type: 'checkbox'
            },{  
                field:  "stakeholder-next-contact",
                type: 'checkbox'
            }
    ];
    
    res.render(template, params);
  };
  
  module.exports = engagementOverview;
  