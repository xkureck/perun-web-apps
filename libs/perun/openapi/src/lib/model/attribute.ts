/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.15.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AttributeDefinition } from './attributeDefinition';


export interface Attribute extends AttributeDefinition { 
    valueCreatedAt?: string;
    valueCreatedBy?: string;
    valueModifiedAt?: string;
    valueModifiedBy?: string;
    value?: object;
}

