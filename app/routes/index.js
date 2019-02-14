const indexRouter = (req, res) => {
    let template = "index";
    const regions =  require("../data/data.regions.json");
    const policies =  require("../data/data.policies.json");
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/',
      regions,
      policies
    };
    
    res.render(template, params);
  };
  
  module.exports = indexRouter;
