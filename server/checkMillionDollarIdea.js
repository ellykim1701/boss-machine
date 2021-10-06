const checkMillionDollarIdea = (req, res, next) => {
    let weeklyRevenue = req.body.weeklyRevenue;
    let numWeeks = req.body.numWeeks;
    if (!weeklyRevenue || !numWeeks) res.status(400).send();
    if (weeklyRevenue * numWeeks >= 1000000) {
        next();
    } else {
        res.status(400).send();
    }
};

module.exports = checkMillionDollarIdea;
