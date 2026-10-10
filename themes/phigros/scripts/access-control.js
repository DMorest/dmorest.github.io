/* Build-time article encryption helper for the ACCESS CONTROL gate. */
'use strict';

var crypto = require('crypto');

hexo.extend.helper.register('encryptAccessPayload', function (content, accessKey) {
  if (!accessKey) return null;
  var salt = crypto.randomBytes(16);
  var iv = crypto.randomBytes(12);
  var derivedKey = crypto.pbkdf2Sync(String(accessKey), salt, 210000, 32, 'sha256');
  var cipher = crypto.createCipheriv('aes-256-gcm', derivedKey, iv);
  var encrypted = Buffer.concat([
    cipher.update(String(content || ''), 'utf8'),
    cipher.final()
  ]);
  return {
    salt: salt.toString('base64'),
    iv: iv.toString('base64'),
    tag: cipher.getAuthTag().toString('base64'),
    data: encrypted.toString('base64'),
    iterations: 210000
  };
});
