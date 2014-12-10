var exec = require("cordova/exec");
var tts = {


    speak: function (text, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "speak", [text]);
    },

    interrupt: function (text, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "interrupt", [text]);
    },

    stop: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "stop", []);
    },

    silence: function (duration, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "silence", [duration]);
    },

    speed: function (speed, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "speed", [speed]);
    },

    pitch: function (pitch, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "pitch", [pitch]);
    },

    startup: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "startup", []);
    },

    shutdown: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "shutdown", []);
    },

    isLanguageAvailable: function (lang, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "isLanguageAvailable", [lang]);
    },

    getLanguage: function (successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "getLanguage", []);
    },

    setLanguage: function (lang, successCallback, errorCallback) {
        exec(successCallback, errorCallback, "TTS", "setLanguage", [lang]);
    }
};

module.exports = tts;