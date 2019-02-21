const regionRouter = (req, res) => {
    const { id } = req.params;
    const organisations = require("../data/data.organisations.json");
    const regions = require("../data/data.regions.json");

    let template = "region/index";

    let params = {
        currentpath: req.path,
        params: req.params,
        backButton: '/'
    };

    params.region = regions[id];
    params.organisations = organisations.filter(({ region }) => region == id);

    res.render(template, params);
};

module.exports = regionRouter;
