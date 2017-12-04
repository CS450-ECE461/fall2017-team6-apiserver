module.exports = exports = {
  '/chat/initSession': {
    get: {action: 'ChatController@initSession'},
  },
  '/chat/getMessage': {
    get: {action: 'ChatController@handleUserMessage'},
  },
};
