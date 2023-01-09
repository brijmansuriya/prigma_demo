import express from 'express';
import { PrismaClient } from '@prisma/client'
import 'dotenv/config'
import app from './app'
const Router = express.Router()
const prisma = new PrismaClient()

import 'dotenv/config'

const { PORT } = process.env

Router.post('/',)

// async function main() {
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

async function main() {
  await prisma.$connect()
  console.log(`server listen http://127.0.0.1:${PORT}`);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  console.log(`server listen http://127.0.0.1:${PORT}`);
})