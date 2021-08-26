const { helloWorld } = require('helloWorld.js');

exports.handler = async (event) => {
  const message = helloWorld('AWS');
  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  return response;
};
