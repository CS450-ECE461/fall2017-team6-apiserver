module.exports = exports = {
  '/account' : { //should get the account
    resource: {
      controller: "UserController"
    }
  }

  '/mechanic' : { //for accessing the mechanic's info page
   resource: {
     controller: "MechanicController"
    }
  }

 '/diagnostic' : { // for accessing diagnostic requests
   resource: {
    controller: "DiagnosticController"
    }
  }
};
