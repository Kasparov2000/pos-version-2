import argon2 from 'argon2'

export async function verifyPassword(hash, password){
    return argon2.verify(hash, password);
}