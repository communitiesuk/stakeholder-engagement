const profileRouter = (req, res) => {
    const { step } = req.params;
    let template = "profile/index";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/'
    };
    
    res.render(template, params);
  };
  
  module.exports = profileRouter;
  