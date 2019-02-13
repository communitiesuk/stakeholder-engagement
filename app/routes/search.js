const searchRouter = (req, res) => {
    const { step } = req.params;
    let template = "search/result";
    
    let params = {
      currentpath: req.path,
      params: req.params,
      backButton : '/'
    };
    
    if (step != undefined) {
      template = `search/${ step }`;
    }
    res.render(template, params);
  };
  
  module.exports = searchRouter;