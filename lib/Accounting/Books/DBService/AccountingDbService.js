import BOOKS from "../Books";


class JournalBookNotRecognizedError extends Error{
    constructor(message) {
        super(message);
    }
}

export class AccountingDbService {
    #book
    constructor(book) {
        if (BOOKS[`${book}`] !== undefined) {
            this.#book = BOOKS[`${book}`]
            return this
        }
        throw new JournalBookNotRecognizedError(`${book} not recognized. Recognized books: ${BOOKS}`)
    }

    async newRecord ({recorderId, customerId, ...payload}) {
        return await this.#book.create({
            data: {
                ...payload,
                recorder: {
                    connect: {
                        id: recorderId
                    }
                },
                customer: {
                    connect: {
                        id: customerId
                    }
                }
            }
        })
    }


    async RetrieveRecords () {
        return await this.#book.findMany({})
    }

    async RetrieveRecord (payload) {
        return await this.#book.findFirst({
            where: payload
        })
    }
}