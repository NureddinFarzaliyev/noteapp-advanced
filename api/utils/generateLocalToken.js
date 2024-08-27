import * as crypto from "node:crypto"

const genereateLocalToken = () => {
    return crypto.randomBytes(20).toString('hex');
}

export default genereateLocalToken