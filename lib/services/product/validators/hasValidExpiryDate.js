export const isExpiryDateValid = ({expiryDate}) => {
    return removeTime(expiryDate) > removeTime(Date.now())
}
