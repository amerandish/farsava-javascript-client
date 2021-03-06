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
 * The Error model module.
 * @module farsava_js_sdk/farsava_model/Error
 * @version 1.0.5
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:farsava_js_sdk/farsava_model/Error
     * @param status {String} HTTP response status code.
     * @param detail {String} Message explaining the issue.
     */
    constructor(status, detail) { 
        
        Error.initialize(this, status, detail);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, detail) { 
        obj['status'] = status;
        obj['detail'] = detail;
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/Error} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns HTTP response status code.
     * @return {String}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets HTTP response status code.
     * @param {String} status HTTP response status code.
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns Message explaining the issue.
     * @return {String}
     */
    getDetail() {
        return this.detail;
    }

    /**
     * Sets Message explaining the issue.
     * @param {String} detail Message explaining the issue.
     */
    setDetail(detail) {
        this['detail'] = detail;
    }
/**
     * Returns Error message title.
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets Error message title.
     * @param {String} title Error message title.
     */
    setTitle(title) {
        this['title'] = title;
    }
/**
     * Returns Error type.
     * @return {String}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Error type.
     * @param {String} type Error type.
     */
    setType(type) {
        this['type'] = type;
    }

}

/**
 * HTTP response status code.
 * @member {String} status
 */
Error.prototype['status'] = undefined;

/**
 * Message explaining the issue.
 * @member {String} detail
 */
Error.prototype['detail'] = undefined;

/**
 * Error message title.
 * @member {String} title
 */
Error.prototype['title'] = undefined;

/**
 * Error type.
 * @member {String} type
 */
Error.prototype['type'] = undefined;






export default Error;

