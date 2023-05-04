import argon2 from "argon2";

export async function encryptPassword(password) {
    return argon2.hash(password);
}