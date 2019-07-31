import { GraphQLServer } from 'graphql-yoga'
import { makePrismaSchema } from 'nexus-prisma'
import * as path from 'path'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'

const schema = makePrismaSchema({
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
})

const server = new GraphQLServer({
	schema,
	context: { prisma },
})

server.start(() => console.log('Server is running on http://localhost:4000'))