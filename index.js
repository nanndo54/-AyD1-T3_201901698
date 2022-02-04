import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo 201901698</h1>')
})

app.get('/extra', (req, res) => {
  res.send('<h1>Hola mundo 201901698</h1>')
})

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'))
