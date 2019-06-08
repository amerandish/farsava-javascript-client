/**
 * Farsava API
 * Farsava API. Speech Recognition and Text to Speech by applying powerful deep neural network models.
 *
 * OpenAPI spec version: 1.0.5
 * Contact: amir@amerandish.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/farsava_js_sdk/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/farsava_js_sdk/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FarsavaJsClient);
  }
}(this, function(expect, FarsavaJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FarsavaJsClient.TTSAudioConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TTSAudioConfig', function() {
    it('should create an instance of TTSAudioConfig', function() {
      // uncomment below and update the code to test TTSAudioConfig
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be.a(FarsavaJsClient.TTSAudioConfig);
    });

    it('should have the property audioEncoding (base name: "audioEncoding")', function() {
      // uncomment below and update the code to test the property audioEncoding
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be();
    });

    it('should have the property sampleRateHertz (base name: "sampleRateHertz")', function() {
      // uncomment below and update the code to test the property sampleRateHertz
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be();
    });

    it('should have the property speakingRate (base name: "speakingRate")', function() {
      // uncomment below and update the code to test the property speakingRate
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be();
    });

    it('should have the property pitch (base name: "pitch")', function() {
      // uncomment below and update the code to test the property pitch
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be();
    });

    it('should have the property volumeGainDb (base name: "volumeGainDb")', function() {
      // uncomment below and update the code to test the property volumeGainDb
      //var instane = new FarsavaJsClient.TTSAudioConfig();
      //expect(instance).to.be();
    });

  });

}));
