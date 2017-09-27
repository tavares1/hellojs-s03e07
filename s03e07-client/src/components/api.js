const axios = require("axios")

let env = process.env.NODE_ENV || "development" // failsafe

console.log(`we are on ${env} mode`)

const serviceaddr = {
  development:"http://localhost:3000",
  production:"https://rickandmortyshowtimeapi.com"
} 

const api = axios.create({
  baseURL:serviceaddr[env]
})

exports.pessoas = {
  list: _ => api.get("/pessoa/list"),
  find: id => api.get(`/pessoa/${id}`),
  save: p => api[p.idpessoa?"put":"post"]("/pessoa/save",p),
  del: id => api["delete"](`/pessoa/${id}`)
}

exports.eventos = {
  list: _ => api.get("/evento/list"),
  find: id => api.get(`/evento/${id}`),
  save: p => api[p.idevento?"put":"post"]("/evento/save",p),
  del: id => api["delete"](`/evento/${id}`)
}