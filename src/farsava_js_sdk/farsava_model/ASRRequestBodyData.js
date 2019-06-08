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
import RecognitionAudioData from './RecognitionAudioData';
import RecognitionConfig from './RecognitionConfig';

/**
 * The ASRRequestBodyData model module.
 * @module farsava_js_sdk/farsava_model/ASRRequestBodyData
 * @version 1.0.5
 */
class ASRRequestBodyData {
    /**
     * Constructs a new <code>ASRRequestBodyData</code>.
     * @alias module:farsava_js_sdk/farsava_model/ASRRequestBodyData
     * @param config {module:farsava_js_sdk/farsava_model/RecognitionConfig} 
     * @param audio {module:farsava_js_sdk/farsava_model/RecognitionAudioData} 
     */
    constructor(config, audio) { 
        
        ASRRequestBodyData.initialize(this, config, audio);
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
     * Constructs a <code>ASRRequestBodyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/ASRRequestBodyData} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/ASRRequestBodyData} The populated <code>ASRRequestBodyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ASRRequestBodyData();

            if (data.hasOwnProperty('config')) {
                obj['config'] = RecognitionConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('audio')) {
                obj['audio'] = RecognitionAudioData.constructFromObject(data['audio']);
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
     * @return {module:farsava_js_sdk/farsava_model/RecognitionAudioData}
     */
    getAudio() {
        return this.audio;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/RecognitionAudioData} audio
     */
    setAudio(audio) {
        this['audio'] = audio;
    }

}

/**
 * @member {module:farsava_js_sdk/farsava_model/RecognitionConfig} config
 */
ASRRequestBodyData.prototype['config'] = undefined;

/**
 * @member {module:farsava_js_sdk/farsava_model/RecognitionAudioData} audio
 */
ASRRequestBodyData.prototype['audio'] = undefined;






export default ASRRequestBodyData;
