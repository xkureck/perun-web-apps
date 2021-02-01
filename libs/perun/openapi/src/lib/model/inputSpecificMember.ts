/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.16.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Candidate } from './candidate';
import { User } from './user';


/**
 * input to createSpecificMember
 */
export interface InputSpecificMember { 
    candidate: Candidate;
    vo: number;
    specificUserType: string;
    specificUserOwners: Array<User>;
}

