import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getPristaOptions = () => {
    async function addUser(data: {email:string, name:string}) {
        let user: Prisma.UserCreateInput
        user = {
            email: data.email,
            name: data.name,
            posts: {
              create: {
                title: 'Include this post!',
              },
            },
        }
        const createUser = await prisma.user.create({ data: user })
        console.log(createUser)
    }

    return {
        addUser
    }
}
