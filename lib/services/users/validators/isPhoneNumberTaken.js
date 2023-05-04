export default async function ({phoneNumber}) {
    const user = await prisma.user.findFirst({
        where: {
            username: {
                equals: phoneNumber,
            }
        }
    })
    return user === null
}