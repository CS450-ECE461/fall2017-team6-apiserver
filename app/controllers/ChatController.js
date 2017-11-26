const blueprint = require('@onehilltech/blueprint');
const randomstring = require('randomstring');
const ChatSession = require('../lib/ChatSession');

const userSessions = {};

class ChatController {
  constructor() {
    blueprint.BaseController.call(this);
  }

  initSession() {
    return (req, res) => {
      const sessionId = randomstring.generate({length: 20});
      userSessions[sessionId] = new ChatSession(sessionId);
      res.json({sessionId});
    };
  }

  handleUserMessage() {
    return (req, res) => {
      // very basic structure
      const sessionId = req.query.sessionId;
      const input = req.query.message;
      res.json({
        response: userSessions[sessionId].getResponse(input),
      });
    };
  }
}

blueprint.controller(ChatController, blueprint.BaseController);
module.exports = exports = ChatController;
