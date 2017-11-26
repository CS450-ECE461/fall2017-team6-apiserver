class ChatSession {
  constructor(sessionId) {
    this.sessionId = sessionId;
    this.currentStage = 0;
  }

  getResponse(input) {
    let message = '';
    this.currentStage++;
    switch (this.currentStep) {
      case 0:
        if (input.includes(' steer ')) {
          message = `I see there’s a problem with your steering.
What does the tire pressure read on your dashboard?`;
        } else break;
      case 1:
        // get the chars between "the " and " tire"
        const tire = input.split(' tire')[0].split('the ').slice(-1)[0];
        message = `Check the ${tire} tire, and see if it’s flat! That could be
affecting your steering. For more information, look at our tutorial on changing
a flat tire and purchasing a new spare.//Do you have any other questions, or
would you like to request an expert?`;
        this.currentStage = 0;
      default: message = `I'm not quite sure what you mean. Could you try to
 rephrase, please?`;
    }
    return message.replace(/\n/g, ' ').replace(/\/\//g, '\n');
  }
}

module.exports = exports = ChatSession;
