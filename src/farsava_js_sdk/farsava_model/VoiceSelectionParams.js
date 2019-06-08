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
import LanguageCode from './LanguageCode';
import TTSVoiceGender from './TTSVoiceGender';

/**
 * The VoiceSelectionParams model module.
 * @module farsava_js_sdk/farsava_model/VoiceSelectionParams
 * @version 1.0.5
 */
class VoiceSelectionParams {
    /**
     * Constructs a new <code>VoiceSelectionParams</code>.
     * The desired voice of the synthesized audio.
     * @alias module:farsava_js_sdk/farsava_model/VoiceSelectionParams
     * @param voiceId {String} id of the desired voice to synthesize. 
     */
    constructor(voiceId) { 
        
        VoiceSelectionParams.initialize(this, voiceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, voiceId) { 
        obj['voiceId'] = voiceId;
    }

    /**
     * Constructs a <code>VoiceSelectionParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/VoiceSelectionParams} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/VoiceSelectionParams} The populated <code>VoiceSelectionParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VoiceSelectionParams();

            if (data.hasOwnProperty('voiceId')) {
                obj['voiceId'] = ApiClient.convertToType(data['voiceId'], 'String');
            }
            if (data.hasOwnProperty('languageCode')) {
                obj['languageCode'] = LanguageCode.constructFromObject(data['languageCode']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = TTSVoiceGender.constructFromObject(data['gender']);
            }
        }
        return obj;
    }

/**
     * Returns id of the desired voice to synthesize. 
     * @return {String}
     */
    getVoiceId() {
        return this.voiceId;
    }

    /**
     * Sets id of the desired voice to synthesize. 
     * @param {String} voiceId id of the desired voice to synthesize. 
     */
    setVoiceId(voiceId) {
        this['voiceId'] = voiceId;
    }
/**
     * @return {module:farsava_js_sdk/farsava_model/LanguageCode}
     */
    getLanguageCode() {
        return this.languageCode;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/LanguageCode} languageCode
     */
    setLanguageCode(languageCode) {
        this['languageCode'] = languageCode;
    }
/**
     * Returns Name of the desired voice.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the desired voice.
     * @param {String} name Name of the desired voice.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * @return {module:farsava_js_sdk/farsava_model/TTSVoiceGender}
     */
    getGender() {
        return this.gender;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/TTSVoiceGender} gender
     */
    setGender(gender) {
        this['gender'] = gender;
    }

}

/**
 * id of the desired voice to synthesize. 
 * @member {String} voiceId
 */
VoiceSelectionParams.prototype['voiceId'] = undefined;

/**
 * @member {module:farsava_js_sdk/farsava_model/LanguageCode} languageCode
 */
VoiceSelectionParams.prototype['languageCode'] = undefined;

/**
 * Name of the desired voice.
 * @member {String} name
 */
VoiceSelectionParams.prototype['name'] = undefined;

/**
 * @member {module:farsava_js_sdk/farsava_model/TTSVoiceGender} gender
 */
VoiceSelectionParams.prototype['gender'] = undefined;






export default VoiceSelectionParams;
