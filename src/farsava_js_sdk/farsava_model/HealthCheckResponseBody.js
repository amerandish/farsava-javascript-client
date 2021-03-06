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
 * The HealthCheckResponseBody model module.
 * @module farsava_js_sdk/farsava_model/HealthCheckResponseBody
 * @version 1.0.5
 */
class HealthCheckResponseBody {
    /**
     * Constructs a new <code>HealthCheckResponseBody</code>.
     * @alias module:farsava_js_sdk/farsava_model/HealthCheckResponseBody
     */
    constructor() { 
        
        HealthCheckResponseBody.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HealthCheckResponseBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:farsava_js_sdk/farsava_model/HealthCheckResponseBody} obj Optional instance to populate.
     * @return {module:farsava_js_sdk/farsava_model/HealthCheckResponseBody} The populated <code>HealthCheckResponseBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HealthCheckResponseBody();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {module:farsava_js_sdk/farsava_model/HealthCheckResponseBody.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * @param {module:farsava_js_sdk/farsava_model/HealthCheckResponseBody.StatusEnum} status
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns Health check message. Returns *OK* if running without problem.
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets Health check message. Returns *OK* if running without problem.
     * @param {String} message Health check message. Returns *OK* if running without problem.
     */
    setMessage(message) {
        this['message'] = message;
    }
/**
     * Returns API version.
     * @return {String}
     */
    getVersion() {
        return this.version;
    }

    /**
     * Sets API version.
     * @param {String} version API version.
     */
    setVersion(version) {
        this['version'] = version;
    }

}

/**
 * @member {module:farsava_js_sdk/farsava_model/HealthCheckResponseBody.StatusEnum} status
 */
HealthCheckResponseBody.prototype['status'] = undefined;

/**
 * Health check message. Returns *OK* if running without problem.
 * @member {String} message
 */
HealthCheckResponseBody.prototype['message'] = undefined;

/**
 * API version.
 * @member {String} version
 */
HealthCheckResponseBody.prototype['version'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
HealthCheckResponseBody['StatusEnum'] = {

    /**
     * value: "Running"
     * @const
     */
    "Running": "Running",

    /**
     * value: "Warnings"
     * @const
     */
    "Warnings": "Warnings",

    /**
     * value: "Critical"
     * @const
     */
    "Critical": "Critical"
};



export default HealthCheckResponseBody;

