/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/workspaceManagedSqlServerSecurityAlertPolicyMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a WorkspaceManagedSqlServerSecurityAlertPolicy. */
export class WorkspaceManagedSqlServerSecurityAlertPolicy {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a WorkspaceManagedSqlServerSecurityAlertPolicy.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a workspace managed sql server's security alert policy.
   * @summary Get server's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): void;
  get(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicy>): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyGetResponse>;
  }

  /**
   * Create or Update a workspace managed sql server's threat detection policy.
   * @summary Create or Update server's threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param parameters The workspace managed sql server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,workspaceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyCreateOrUpdateResponse>;
  }

  /**
   * Get workspace managed sql server's threat detection policies.
   * @summary Get server's threat detection policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListResponse>
   */
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workspaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  list(resourceGroupName: string, workspaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListResponse>;
  }

  /**
   * Create or Update a workspace managed sql server's threat detection policy.
   * @summary Create or Update server's threat detection policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param parameters The workspace managed sql server security alert policy.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, workspaceName: string, parameters: Models.ServerSecurityAlertPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Get workspace managed sql server's threat detection policies.
   * @summary Get server's threat detection policies.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>, callback?: msRest.ServiceCallback<Models.ServerSecurityAlertPolicyListResult>): Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkspaceManagedSqlServerSecurityAlertPolicyListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.securityAlertPolicyName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/securityAlertPolicies/{securityAlertPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.securityAlertPolicyName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ServerSecurityAlertPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServerSecurityAlertPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
