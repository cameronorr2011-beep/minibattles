// offline stub: no Poki network calls
var PokiSDK = {
  init: function () { return Promise.resolve(); },
  gameLoadingStart: function () {},
  gameLoadingProgress: function (o) {},
  gameLoadingFinished: function () {},
  commercialBreak: function () { return Promise.resolve(); },
  rewardedBreak: function () { return Promise.resolve(false); },
  happyTime: function () {},
  setDebug: function () {}
};
