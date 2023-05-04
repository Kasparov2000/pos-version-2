export default function midnightTime () {
    const currentTime = new Date()
    const midnight = new Date()
    midnight.setHours(0, 0, 0 , 0)
    midnight.setDate(midnight.getDate() + 1)
    return  Date.now() + (midnight.getTime() - currentTime.getTime())
}