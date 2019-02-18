const stakeholderRouter = (req, res) => {
    const { step } = req.params;
    let template = "stakeholder/index";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/'
    };
    
    res.render(template, params);
  };
  
  module.exports = stakeholderRouter;
  