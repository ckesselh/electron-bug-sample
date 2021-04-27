const NativeExtension = require('./');
NativeExtension.aHack();
console.log('String returned by native extension:', NativeExtension.aString());
