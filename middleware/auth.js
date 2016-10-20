var mySecretPassphrase = process.env.PASSPHRASE || require('../config.js').secretPassphrase;

function authorize(request, response, next){
  var secretPhrase = request.headers.secret;

  if(!secretPhrase || secretPhrase !== mySecretPassphrase){
    response.status(403).json({
      msg: 'You are not authorized'
    });
  } else {
    next();
  }
}

module.exports = authorize;
