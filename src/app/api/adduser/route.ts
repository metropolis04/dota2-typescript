import { type NextRequest } from 'next/server'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req:NextRequest) {

    const postdata = await req.json()
    
    if (postdata) {
        let user: Prisma.UserCreateInput
        user = {
            email: postdata.email,
            name: postdata.name,
            posts: {
              create: {
                title: 'Include this post!',
              },
            },
        }
        const createUser = await prisma.user.create({ data: user })
        if (createUser) {
            return new Response(JSON.stringify({status : 'success', data : createUser}) , {
                status : 200
            })
        } else {
            return new Response(JSON.stringify({status : 'error' , data : 'error with database create user'}) , {
                status : 404
            })
        }
    } else {
        return new Response(JSON.stringify({status : 'error' , data : 'no post data'}) , {
            status : 404
        })
    }
}