// Criação de promessa
const myPromiss = new Promise((resolve, reject) => {

  const nome = 'Matheus'

  if (nome === "Matheus") {
    resolve('Usuário Matheus encontrado!')
  } else {
    reject('O usuário Matheus não foi encontrado')
  }
})

myPromiss.then((data) => {
  console.log(data)
}) // executar a promessa, e esperar os dados

// Encadeamento de then's

const myPromiss2 = new Promise((resolve, reject) => {
  const nome = 'Matheus'

  if (nome === 'Matheus') {
    resolve('Usuário Matheus encontrado')
  } else {
    reject('O usuário Matheus não foi encontrado')
  }
})

myPromiss2.then((data) => {
  return data.toLowerCase()
}).then((stringModificada) => {
  console.log(stringModificada)
})

// Retorno do catch
const myPromiss3 = new Promise((resolve, reject) => {
  const nome = 'João'

  if (nome === 'Matheus') {
    resolve('Usuário Matheus encontrado')
  } else {
    reject('O usuário Matheus não foi encontrado')
  }
})

myPromiss3.then((data) => {
  console.log(data)
}).catch((err) => {
  console.log('Aconteceu um erro: ' + err)
}) // continuar o fluxo caso haja um erro na aplicação

// Resolver várias promessas com all
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Ok!")
  }, 2000);
})

const p2 = new Promise((resolve, reject) => {
  resolve("P2 Ok!")
})

const p3 = new Promise((resolve, reject) => {
  resolve("P3 Ok!")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data)
})

console.log('promiss al()')

// várias promessas com race - traz a primeira promisse que estiver pronta 

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 Ok!")
  }, 2000);
})

const p5 = new Promise((resolve, reject) => {
  resolve("P5 Ok!")
})

const p6 = new Promise((resolve, reject) => {
  resolve("P6 Ok!")
})

const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data)
})

// Fetch request na API do GitHub
// Fecth API

const userName = 'caiortes'

fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  }
}).then((response) => {
  console.log(typeof response)
  console.log(response)
  return response.json()
}).then((data) => {
  console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
  console.log(`Houve algum erro: ${err}`)
})
