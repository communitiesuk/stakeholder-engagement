const engagementSuccess = (req, res) => {
    let params = {
      currentpath: req.path,
      params: req.params
    };

    let contacted = req.session.data['stakeholder-successful-contact']

    if (contacted === 'yes') {
      res.redirect('/engagement/summary')
    } else {
      res.redirect('/engagement/next-steps')
    }
  };
  
  module.exports = engagementSuccess;
  