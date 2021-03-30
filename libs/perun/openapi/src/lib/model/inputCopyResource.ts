/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.21.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Resource } from './resource';


/**
 * input to copyResource
 */
export interface InputCopyResource { 
    templateResource: Resource;
    destinationResource: Resource;
    /**
     * if copy the resource with group
     */
    withGroups: boolean;
}

