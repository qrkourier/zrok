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

import { RequestFile } from './models';
import { MetricsSample } from './metricsSample';

export class Metrics {
    'scope'?: string;
    'id'?: string;
    'period'?: number;
    'samples'?: Array<MetricsSample>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "number"
        },
        {
            "name": "samples",
            "baseName": "samples",
            "type": "Array<MetricsSample>"
        }    ];

    static getAttributeTypeMap() {
        return Metrics.attributeTypeMap;
    }
}
