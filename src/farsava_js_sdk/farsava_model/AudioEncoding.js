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
* Enum class AudioEncoding.
* @enum {}
* @readonly
*/
export default class AudioEncoding {
    
        /**
         * value: "LINEAR16"
         * @const
         */
        "LINEAR16" = "LINEAR16";

    
        /**
         * value: "FLAC"
         * @const
         */
        "FLAC" = "FLAC";

    
        /**
         * value: "MP3"
         * @const
         */
        "MP3" = "MP3";

    

    /**
    * Returns a <code>AudioEncoding</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:farsava_js_sdk/farsava_model/AudioEncoding} The enum <code>AudioEncoding</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

