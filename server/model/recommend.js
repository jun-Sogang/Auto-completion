const {recommend} = require('../db/recommend');

module.exports = {
  get: (req) => (recommend(req.query.query))
}
