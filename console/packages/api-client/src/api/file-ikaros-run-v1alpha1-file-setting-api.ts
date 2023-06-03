/* tslint:disable */
/* eslint-disable */
/**
 * Ikaros Open API Documentation
 * Documentation for Ikaros Open API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
	DUMMY_BASE_URL,
	assertParamExists,
	setApiKeyToObject,
	setBasicAuthToObject,
	setBearerAuthToObject,
	setOAuthToObject,
	setSearchParams,
	serializeDataIfNeeded,
	toPathString,
	createRequestFunction,
} from '../common';
// @ts-ignore
import {
	BASE_PATH,
	COLLECTION_FORMATS,
	RequestArgs,
	BaseAPI,
	RequiredError,
} from '../base';
// @ts-ignore
import { FileSetting } from '../models';
// @ts-ignore
import { PagingWrap } from '../models';
/**
 * FileIkarosRunV1alpha1FileSettingApi - axios parameter creator
 * @export
 */
export const FileIkarosRunV1alpha1FileSettingApiAxiosParamCreator = function (
	configuration?: Configuration
) {
	return {
		/**
		 * Create setting
		 * @param {FileSetting} [fileSetting] Fresh FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		createsetting: async (
			fileSetting?: FileSetting,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			const localVarPath = `/apis/file.ikaros.run/v1alpha1/setting`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'POST',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				fileSetting,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Delete setting
		 * @param {string} name Name of FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		deletesetting: async (
			name: string,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'name' is not null or undefined
			assertParamExists('deletesetting', 'name', name);
			const localVarPath =
				`/apis/file.ikaros.run/v1alpha1/setting/{name}`.replace(
					`{${'name'}}`,
					encodeURIComponent(String(name))
				);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'DELETE',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Get setting
		 * @param {string} name Name of FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		getsetting: async (
			name: string,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'name' is not null or undefined
			assertParamExists('getsetting', 'name', name);
			const localVarPath =
				`/apis/file.ikaros.run/v1alpha1/setting/{name}`.replace(
					`{${'name'}}`,
					encodeURIComponent(String(name))
				);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'GET',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Get settings by paging.
		 * @param {string} page Page of FileSetting
		 * @param {string} size Size ofFileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		getsettingsbyPaging: async (
			page: string,
			size: string,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'page' is not null or undefined
			assertParamExists('getsettingsbyPaging', 'page', page);
			// verify required parameter 'size' is not null or undefined
			assertParamExists('getsettingsbyPaging', 'size', size);
			const localVarPath =
				`/apis/file.ikaros.run/v1alpha1/settings/{page}/{size}`
					.replace(`{${'page'}}`, encodeURIComponent(String(page)))
					.replace(`{${'size'}}`, encodeURIComponent(String(size)));
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'GET',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * List settings
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		listsettings: async (
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			const localVarPath = `/apis/file.ikaros.run/v1alpha1/settings`;
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'GET',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
		/**
		 * Update setting
		 * @param {string} name Name of setting
		 * @param {FileSetting} [fileSetting] Updated FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		updatesetting: async (
			name: string,
			fileSetting?: FileSetting,
			options: AxiosRequestConfig = {}
		): Promise<RequestArgs> => {
			// verify required parameter 'name' is not null or undefined
			assertParamExists('updatesetting', 'name', name);
			const localVarPath = `/apis/file.ikaros.run/v1alpha1/setting`.replace(
				`{${'name'}}`,
				encodeURIComponent(String(name))
			);
			// use dummy base URL string because the URL constructor only accepts absolute URLs.
			const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
			let baseOptions;
			if (configuration) {
				baseOptions = configuration.baseOptions;
			}

			const localVarRequestOptions = {
				method: 'PUT',
				...baseOptions,
				...options,
			};
			const localVarHeaderParameter = {} as any;
			const localVarQueryParameter = {} as any;

			// authentication BasicAuth required
			// http basic authentication required
			setBasicAuthToObject(localVarRequestOptions, configuration);

			// authentication BearerAuth required
			// http bearer authentication required
			await setBearerAuthToObject(localVarHeaderParameter, configuration);

			localVarHeaderParameter['Content-Type'] = 'application/json';

			setSearchParams(localVarUrlObj, localVarQueryParameter);
			let headersFromBaseOptions =
				baseOptions && baseOptions.headers ? baseOptions.headers : {};
			localVarRequestOptions.headers = {
				...localVarHeaderParameter,
				...headersFromBaseOptions,
				...options.headers,
			};
			localVarRequestOptions.data = serializeDataIfNeeded(
				fileSetting,
				localVarRequestOptions,
				configuration
			);

			return {
				url: toPathString(localVarUrlObj),
				options: localVarRequestOptions,
			};
		},
	};
};

/**
 * FileIkarosRunV1alpha1FileSettingApi - functional programming interface
 * @export
 */
export const FileIkarosRunV1alpha1FileSettingApiFp = function (
	configuration?: Configuration
) {
	const localVarAxiosParamCreator =
		FileIkarosRunV1alpha1FileSettingApiAxiosParamCreator(configuration);
	return {
		/**
		 * Create setting
		 * @param {FileSetting} [fileSetting] Fresh FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async createsetting(
			fileSetting?: FileSetting,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileSetting>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.createsetting(
				fileSetting,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * Delete setting
		 * @param {string} name Name of FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async deletesetting(
			name: string,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.deletesetting(
				name,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * Get setting
		 * @param {string} name Name of FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async getsetting(
			name: string,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileSetting>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.getsetting(
				name,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * Get settings by paging.
		 * @param {string} page Page of FileSetting
		 * @param {string} size Size ofFileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async getsettingsbyPaging(
			page: string,
			size: string,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PagingWrap>
		> {
			const localVarAxiosArgs =
				await localVarAxiosParamCreator.getsettingsbyPaging(
					page,
					size,
					options
				);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * List settings
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async listsettings(
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileSetting>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.listsettings(
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
		/**
		 * Update setting
		 * @param {string} name Name of setting
		 * @param {FileSetting} [fileSetting] Updated FileSetting
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		async updatesetting(
			name: string,
			fileSetting?: FileSetting,
			options?: AxiosRequestConfig
		): Promise<
			(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FileSetting>
		> {
			const localVarAxiosArgs = await localVarAxiosParamCreator.updatesetting(
				name,
				fileSetting,
				options
			);
			return createRequestFunction(
				localVarAxiosArgs,
				globalAxios,
				BASE_PATH,
				configuration
			);
		},
	};
};

/**
 * FileIkarosRunV1alpha1FileSettingApi - factory interface
 * @export
 */
export const FileIkarosRunV1alpha1FileSettingApiFactory = function (
	configuration?: Configuration,
	basePath?: string,
	axios?: AxiosInstance
) {
	const localVarFp = FileIkarosRunV1alpha1FileSettingApiFp(configuration);
	return {
		/**
		 * Create setting
		 * @param {FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		createsetting(
			requestParameters: FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest = {},
			options?: AxiosRequestConfig
		): AxiosPromise<FileSetting> {
			return localVarFp
				.createsetting(requestParameters.fileSetting, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Delete setting
		 * @param {FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		deletesetting(
			requestParameters: FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest,
			options?: AxiosRequestConfig
		): AxiosPromise<void> {
			return localVarFp
				.deletesetting(requestParameters.name, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Get setting
		 * @param {FileIkarosRunV1alpha1FileSettingApiGetsettingRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		getsetting(
			requestParameters: FileIkarosRunV1alpha1FileSettingApiGetsettingRequest,
			options?: AxiosRequestConfig
		): AxiosPromise<FileSetting> {
			return localVarFp
				.getsetting(requestParameters.name, options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Get settings by paging.
		 * @param {FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		getsettingsbyPaging(
			requestParameters: FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest,
			options?: AxiosRequestConfig
		): AxiosPromise<PagingWrap> {
			return localVarFp
				.getsettingsbyPaging(
					requestParameters.page,
					requestParameters.size,
					options
				)
				.then((request) => request(axios, basePath));
		},
		/**
		 * List settings
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		listsettings(options?: AxiosRequestConfig): AxiosPromise<FileSetting> {
			return localVarFp
				.listsettings(options)
				.then((request) => request(axios, basePath));
		},
		/**
		 * Update setting
		 * @param {FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest} requestParameters Request parameters.
		 * @param {*} [options] Override http request option.
		 * @throws {RequiredError}
		 */
		updatesetting(
			requestParameters: FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest,
			options?: AxiosRequestConfig
		): AxiosPromise<FileSetting> {
			return localVarFp
				.updatesetting(
					requestParameters.name,
					requestParameters.fileSetting,
					options
				)
				.then((request) => request(axios, basePath));
		},
	};
};

/**
 * Request parameters for createsetting operation in FileIkarosRunV1alpha1FileSettingApi.
 * @export
 * @interface FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest
 */
export interface FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest {
	/**
	 * Fresh FileSetting
	 * @type {FileSetting}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiCreatesetting
	 */
	readonly fileSetting?: FileSetting;
}

/**
 * Request parameters for deletesetting operation in FileIkarosRunV1alpha1FileSettingApi.
 * @export
 * @interface FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest
 */
export interface FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest {
	/**
	 * Name of FileSetting
	 * @type {string}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiDeletesetting
	 */
	readonly name: string;
}

/**
 * Request parameters for getsetting operation in FileIkarosRunV1alpha1FileSettingApi.
 * @export
 * @interface FileIkarosRunV1alpha1FileSettingApiGetsettingRequest
 */
export interface FileIkarosRunV1alpha1FileSettingApiGetsettingRequest {
	/**
	 * Name of FileSetting
	 * @type {string}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiGetsetting
	 */
	readonly name: string;
}

/**
 * Request parameters for getsettingsbyPaging operation in FileIkarosRunV1alpha1FileSettingApi.
 * @export
 * @interface FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest
 */
export interface FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest {
	/**
	 * Page of FileSetting
	 * @type {string}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPaging
	 */
	readonly page: string;

	/**
	 * Size ofFileSetting
	 * @type {string}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPaging
	 */
	readonly size: string;
}

/**
 * Request parameters for updatesetting operation in FileIkarosRunV1alpha1FileSettingApi.
 * @export
 * @interface FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest
 */
export interface FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest {
	/**
	 * Name of setting
	 * @type {string}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiUpdatesetting
	 */
	readonly name: string;

	/**
	 * Updated FileSetting
	 * @type {FileSetting}
	 * @memberof FileIkarosRunV1alpha1FileSettingApiUpdatesetting
	 */
	readonly fileSetting?: FileSetting;
}

/**
 * FileIkarosRunV1alpha1FileSettingApi - object-oriented interface
 * @export
 * @class FileIkarosRunV1alpha1FileSettingApi
 * @extends {BaseAPI}
 */
export class FileIkarosRunV1alpha1FileSettingApi extends BaseAPI {
	/**
	 * Create setting
	 * @param {FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public createsetting(
		requestParameters: FileIkarosRunV1alpha1FileSettingApiCreatesettingRequest = {},
		options?: AxiosRequestConfig
	) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.createsetting(requestParameters.fileSetting, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Delete setting
	 * @param {FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public deletesetting(
		requestParameters: FileIkarosRunV1alpha1FileSettingApiDeletesettingRequest,
		options?: AxiosRequestConfig
	) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.deletesetting(requestParameters.name, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Get setting
	 * @param {FileIkarosRunV1alpha1FileSettingApiGetsettingRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public getsetting(
		requestParameters: FileIkarosRunV1alpha1FileSettingApiGetsettingRequest,
		options?: AxiosRequestConfig
	) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.getsetting(requestParameters.name, options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Get settings by paging.
	 * @param {FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public getsettingsbyPaging(
		requestParameters: FileIkarosRunV1alpha1FileSettingApiGetsettingsbyPagingRequest,
		options?: AxiosRequestConfig
	) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.getsettingsbyPaging(
				requestParameters.page,
				requestParameters.size,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * List settings
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public listsettings(options?: AxiosRequestConfig) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.listsettings(options)
			.then((request) => request(this.axios, this.basePath));
	}

	/**
	 * Update setting
	 * @param {FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest} requestParameters Request parameters.
	 * @param {*} [options] Override http request option.
	 * @throws {RequiredError}
	 * @memberof FileIkarosRunV1alpha1FileSettingApi
	 */
	public updatesetting(
		requestParameters: FileIkarosRunV1alpha1FileSettingApiUpdatesettingRequest,
		options?: AxiosRequestConfig
	) {
		return FileIkarosRunV1alpha1FileSettingApiFp(this.configuration)
			.updatesetting(
				requestParameters.name,
				requestParameters.fileSetting,
				options
			)
			.then((request) => request(this.axios, this.basePath));
	}
}
