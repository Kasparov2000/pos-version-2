export default async function ({username}) {
    const user = await prisma.user.findFirst({
        where: {
            username: {
                equals: username,
            },
        }
    })
    return user === null
}