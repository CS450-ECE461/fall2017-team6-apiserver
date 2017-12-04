module.exports = exports = {
  '/user/login': {
    get: {action: 'UserController@login'},
  },
  '/user/register': {
    get: {action: 'UserController@register'},
  },
};
