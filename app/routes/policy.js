const policyRouter = (req, res) => {
    const { step } = req.params;
    let template = "policy/index";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/'
    };
    
    res.render(template, params);
  };
  
  module.exports = policyRouter;
