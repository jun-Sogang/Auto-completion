const recommend = require('../model/recommend');

module.exports = {
  recommend: {
    get: (req, res) => (recommend.get(req))
    .then((result) => {
      const body = JSON.stringify(result);
      res.json(body);
    })
    .catch((err) => {
      res.sendStatus(400);
      throw err;
    }),
  }
}
