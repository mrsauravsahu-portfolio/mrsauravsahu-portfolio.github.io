import {default as Express} from 'express'

const app = Express()

const port = process.env.PORT ? Number(process.env.PORT) : 80
const host = process.env.HOST ?? '0.0.0.0'

app.use(Express.static('data'))

app.listen(port, host, () => {
  console.log(`Started server at http://${host}:${port}`)
})
