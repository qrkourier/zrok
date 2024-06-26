/* tslint:disable */
/* eslint-disable */
/**
 * zrok
 * zrok client access
 *
 * The version of the OpenAPI document: 0.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateShareRequest
 */
export interface UpdateShareRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateShareRequest
     */
    shrToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateShareRequest
     */
    backendProxyEndpoint?: string;
}

/**
 * Check if a given object implements the UpdateShareRequest interface.
 */
export function instanceOfUpdateShareRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateShareRequestFromJSON(json: any): UpdateShareRequest {
    return UpdateShareRequestFromJSONTyped(json, false);
}

export function UpdateShareRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateShareRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'shrToken': !exists(json, 'shrToken') ? undefined : json['shrToken'],
        'backendProxyEndpoint': !exists(json, 'backendProxyEndpoint') ? undefined : json['backendProxyEndpoint'],
    };
}

export function UpdateShareRequestToJSON(value?: UpdateShareRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'shrToken': value.shrToken,
        'backendProxyEndpoint': value.backendProxyEndpoint,
    };
}

