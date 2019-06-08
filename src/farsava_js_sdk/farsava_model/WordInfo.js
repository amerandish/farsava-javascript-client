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

/**
 * The WordInfo model module.
 * @module farsava_js_sdk/farsava_model/WordInfo
 * @version 1.0.5
 */
class WordInfo {
    /**
     * Constructs a new <code>WordInfo</code>.
     * @alias module:farsava_js_sdk/farsava_model/WordInfo
     */
    constructor() { 
        
        WordInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WordInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/WordInfo} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/WordInfo} The populated <code>WordInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WordInfo();

            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Number');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Number');
            }
            if (data.hasOwnProperty('word')) {
                obj['word'] = ApiClient.convertToType(data['word'], 'String');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * @return {Number}
     */
    getStartTime() {
        return this.startTime;
    }

    /**
     * Sets Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * @param {Number} startTime Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     */
    setStartTime(startTime) {
        this['startTime'] = startTime;
    }
/**
     * Returns Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * @return {Number}
     */
    getEndTime() {
        return this.endTime;
    }

    /**
     * Sets Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * @param {Number} endTime Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     */
    setEndTime(endTime) {
        this['endTime'] = endTime;
    }
/**
     * Returns The word corresponding to this set of information. 
     * @return {String}
     */
    getWord() {
        return this.word;
    }

    /**
     * Sets The word corresponding to this set of information. 
     * @param {String} word The word corresponding to this set of information. 
     */
    setWord(word) {
        this['word'] = word;
    }
/**
     * Returns The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * minimum: 0
     * maximum: 1
     * @return {Number}
     */
    getConfidence() {
        return this.confidence;
    }

    /**
     * Sets The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     * @param {Number} confidence The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
     */
    setConfidence(confidence) {
        this['confidence'] = confidence;
    }

}

/**
 * Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
 * @member {Number} startTime
 */
WordInfo.prototype['startTime'] = undefined;

/**
 * Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This is an experimental feature and the accuracy of the time offset can vary. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
 * @member {Number} endTime
 */
WordInfo.prototype['endTime'] = undefined;

/**
 * The word corresponding to this set of information. 
 * @member {String} word
 */
WordInfo.prototype['word'] = undefined;

/**
 * The confidence of ASR engine for generated output. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. It is the total confidence of recognition in transcript level and each word confidence in word info object. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set. 
 * @member {Number} confidence
 */
WordInfo.prototype['confidence'] = undefined;






export default WordInfo;
