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

import ApiClient from '../ApiClient';
import RecognitionAudioURI from './RecognitionAudioURI';
import RecognitionConfig from './RecognitionConfig';

/**
 * The ASRRequestBodyURI model module.
 * @module farsava_js_sdk/farsava_model/ASRRequestBodyURI
 * @version 1.0.5
 */
class ASRRequestBodyURI {
    /**
     * Constructs a new <code>ASRRequestBodyURI</code>.
     * @alias module:farsava_js_sdk/farsava_model/ASRRequestBodyURI
     * @param config {module:farsava_js_sdk/farsava_model/RecognitionConfig} 
     * @param audio {module:farsava_js_sdk/farsava_model/RecognitionAudioURI} 
     */
    constructor(config, audio) { 
        
        ASRRequestBodyURI.initialize(this, config, audio);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, config, audio) { 
        obj['config'] = config;
        obj['audio'] = audio;
    }

    /**
     * Constructs a <code>ASRRequestBodyURI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/ASRRequestBodyURI} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/ASRRequestBodyURI} The populated <code>ASRRequestBodyURI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASRRequestBodyURI();

            if (data.hasOwnProperty('config')) {
                obj['config'] = RecognitionConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('audio')) {
                obj['audio'] = RecognitionAudioURI.constructFromObject(data['audio']);
            }
        }
        return obj;
    }

/**
     * @return {module:farsava_js_sdk/farsava_model/RecognitionConfig}
     */
    getConfig() {
        return this.config;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/RecognitionConfig} config
     */
    setConfig(config) {
        this['config'] = config;
    }
/**
     * @return {module:farsava_js_sdk/farsava_model/RecognitionAudioURI}
     */
    getAudio() {
        return this.audio;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/RecognitionAudioURI} audio
     */
    setAudio(audio) {
        this['audio'] = audio;
    }

}

/**
 * @member {module:farsava_js_sdk/farsava_model/RecognitionConfig} config
 */
ASRRequestBodyURI.prototype['config'] = undefined;

/**
 * @member {module:farsava_js_sdk/farsava_model/RecognitionAudioURI} audio
 */
ASRRequestBodyURI.prototype['audio'] = undefined;






export default ASRRequestBodyURI;

