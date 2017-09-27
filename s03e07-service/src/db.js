const cfg = require("../knexfile")
let env = process.env.NODE_ENV || "development" // failsafe
const knex = require("knex")(cfg[env])
exports.knex = knex
exports.env = env // só pra conferir