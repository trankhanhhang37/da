'use strict'
const jwt = require("jsonwebtoken");
const errorResponse = require("../core/error.response")
const { asyncHandler } = require("../helpers/index")
const { findByUserId } = require("../services/KeyTokenService")

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization',
    CLIENT_ID: 'x-client-id'
}

const authentication = asyncHandler(async (req, res, next) => {
    console.log(req.headers)
    const userId = req.headers[HEADER.CLIENT_ID].toString()
    if (!userId) throw new errorResponse.ForbiddenRequestError("invalid request")
    const keyStore = await findByUserId(userId)
    if (!keyStore) throw new errorResponse.NotFoundRequestError("not found keyStore")
    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if (!accessToken) throw new errorResponse.ForbiddenRequestError("invalid request")
    console.log("keyStore", keyStore)
    try {
        const decodeUser = jwt.verify(accessToken, keyStore.publicKey)
        console.log("decodeUser", decodeUser)
        if (decodeUser.userId) {
            if (userId.toString() !== decodeUser.userId.toString()) throw new errorResponse.ForbiddenRequestError("invalid request")
        }
        req.keyStore = keyStore

        return next()

    } catch (error) {
        throw error
    }

})

const verifyJWT = async (token, keySecret) => {
    return await jwt.verify(token, keySecret)
}


module.exports = {
    authentication,
    verifyJWT
}