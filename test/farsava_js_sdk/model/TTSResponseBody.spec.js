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
    instance = new FarsavaJsClient.TTSResponseBody();
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

  describe('TTSResponseBody', function() {
    it('should create an instance of TTSResponseBody', function() {
      // uncomment below and update the code to test TTSResponseBody
      //var instane = new FarsavaJsClient.TTSResponseBody();
      //expect(instance).to.be.a(FarsavaJsClient.TTSResponseBody);
    });

    it('should have the property audioContent (base name: "audioContent")', function() {
      // uncomment below and update the code to test the property audioContent
      //var instane = new FarsavaJsClient.TTSResponseBody();
      //expect(instance).to.be();
    });

  });

}));