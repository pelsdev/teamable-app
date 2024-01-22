function isInvalidEmail(userObject) {
   return !userObject.email.includes("@")
}

function isEmptyPayload(userObject) {
    Object.keys(userObject).length === 0
}

module.exports = {
    isInvalidEmail,
    isEmptyPayload
}

