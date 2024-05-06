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
 * @interface CreateFrontendResponse
 */
export interface CreateFrontendResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateFrontendResponse
     */
    token?: string;
}

/**
 * Check if a given object implements the CreateFrontendResponse interface.
 */
export function instanceOfCreateFrontendResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateFrontendResponseFromJSON(json: any): CreateFrontendResponse {
    return CreateFrontendResponseFromJSONTyped(json, false);
}

export function CreateFrontendResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFrontendResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function CreateFrontendResponseToJSON(value?: CreateFrontendResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}
