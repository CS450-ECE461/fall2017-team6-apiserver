module.exports = {
  token: {
    kind: 'jwt',
    options: {
      issuer: 'car-chat',
      algorithm : 'RS256',
      secret: 'tb4jiotbopi49tehb094tbhin'   // can replace with publicKey, privateKey properties
    }
  }
};
