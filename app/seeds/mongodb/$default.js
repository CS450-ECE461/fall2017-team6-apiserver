'use strict';

const dab = require('@onehilltech/dab')
  ;

module.exports = {
  clients: dab.times(1, (i, opts, callback) => {
    let client = {
      _id: '5a0af85d2c4dc224bc336cd8',
      name: 'aldahick',
      // eslint-disable-next-line
      client_secret: 'VJ-Fk66vI3Y4MhF9axJTK4VmNJKOU7VRCuphLuAd3MfShwzy4vEIBTsbCPxqq8JeKWHoNWIE9zG54w-UDMDkf3A0KsH4i-W8givlOAWnKS57XuBXOZ9HIiyjM_3puAeN_uXcPLgx0x0M1USXuRa0qXQTirw3EJU_0hdy8QBNXlw',
      email: 'aldahick@iupui.edu',
      scope: '*',
      type: 'native',
    };
    return callback(null, client);
  }),
};
