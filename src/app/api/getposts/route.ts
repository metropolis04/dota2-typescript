import { type NextRequest } from 'next/server'
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req:NextRequest) {

    const postdata = await req.json()
    
    if (postdata && postdata.id) {
        const getAuthor = await prisma.user.findUnique({
            where: {
              id: postdata.id,
            },
            include: {
              posts: true, // All posts where authorId == 20
            },
          });
        if (getAuthor) {
            return new Response(JSON.stringify({status : 'success', data : getAuthor}) , {
                status : 200
            })
        } else {
            return new Response(JSON.stringify({status : 'error' , data : 'error with database to get user posts'}) , {
                status : 404
            })
        }
    } else {
        return new Response(JSON.stringify({status : 'error' , data : 'no post data'}) , {
            status : 404
        })
    }
}