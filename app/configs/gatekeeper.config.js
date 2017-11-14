module.exports = {
  token: {
    kind: 'jwt',
    options: {
      issuer: 'car-chat',
      algorithm: 'RS256',
      // can replace with publicKey, privateKey properties
      secret: 'tb4jiotbopi49tehb094tbhin',
    },
  },
};
