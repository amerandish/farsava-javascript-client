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
 * The SynthesisInput model module.
 * @module farsava_js_sdk/farsava_model/SynthesisInput
 * @version 1.0.5
 */
class SynthesisInput {
    /**
     * Constructs a new <code>SynthesisInput</code>.
     * The Synthesizer requires either plain text or SSML as input. Only provide text OR ssml. Providing both will result in a bad request response.
     * @alias module:farsava_js_sdk/farsava_model/SynthesisInput
     */
    constructor() { 
        
        SynthesisInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SynthesisInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/SynthesisInput} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/SynthesisInput} The populated <code>SynthesisInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SynthesisInput();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('ssml')) {
                obj['ssml'] = ApiClient.convertToType(data['ssml'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The raw text to be synthesized.
     * @return {String}
     */
    getText() {
        return this.text;
    }

    /**
     * Sets The raw text to be synthesized.
     * @param {String} text The raw text to be synthesized.
     */
    setText(text) {
        this['text'] = text;
    }
/**
     * Returns The SSML document to be synthesized. The SSML document must be valid and well-formed.
     * @return {String}
     */
    getSsml() {
        return this.ssml;
    }

    /**
     * Sets The SSML document to be synthesized. The SSML document must be valid and well-formed.
     * @param {String} ssml The SSML document to be synthesized. The SSML document must be valid and well-formed.
     */
    setSsml(ssml) {
        this['ssml'] = ssml;
    }

}

/**
 * The raw text to be synthesized.
 * @member {String} text
 */
SynthesisInput.prototype['text'] = undefined;

/**
 * The SSML document to be synthesized. The SSML document must be valid and well-formed.
 * @member {String} ssml
 */
SynthesisInput.prototype['ssml'] = undefined;






export default SynthesisInput;

