import { ROUTE_CLEAR_LAST_NON_EDITOR, ROUTE_SET } from 'calypso/state/action-types';

import 'calypso/state/ui/init';

/**
 * Returns an action object signalling that the current route is to be changed
 *
 * @param  {string} path    Route path
 * @param  {Object} [query] Query arguments
 * @returns {Object}         Action object
 */
export function setRoute( path, query = {} ) {
	return {
		type: ROUTE_SET,
		path,
		query,
	};
}

/**
 * Action to forget what the last non-editor route was.
 */
export function clearLastNonEditorRoute() {
	return {
		type: ROUTE_CLEAR_LAST_NON_EDITOR,
	};
}
