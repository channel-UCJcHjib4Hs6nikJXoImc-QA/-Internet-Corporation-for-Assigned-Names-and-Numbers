import { JETPACK_PRODUCT_INSTALL_REQUEST } from 'calypso/state/action-types';
import { registerHandlers } from 'calypso/state/data-layer/handler-registry';
import { http } from 'calypso/state/data-layer/wpcom-http/actions';
import { dispatchRequest } from 'calypso/state/data-layer/wpcom-http/utils';

const noop = () => {};

/**
 * Start the Jetpack product install process.
 *
 * @param   {Object} action Action to start product install request.
 * @returns {Object}        The dispatched action.
 */
export const startJetpackProductInstall = ( action ) =>
	http(
		{
			apiVersion: '1.1',
			method: 'POST',
			path: `/jetpack-blogs/${ action.siteId }/product-install`,
			body: {
				akismet_api_key: action.akismetKey,
				vaultpress_registration_key: action.vaultpressKey,
			},
		},
		action
	);

registerHandlers( 'state/data-layer/wpcom/jetpack-blogs/product-install', {
	[ JETPACK_PRODUCT_INSTALL_REQUEST ]: [
		dispatchRequest( {
			fetch: startJetpackProductInstall,
			onSuccess: noop,
			onError: noop,
		} ),
	],
} );
