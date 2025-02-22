import { get } from 'lodash';
import getRawSite from 'calypso/state/selectors/get-raw-site';

/**
 * Returns true if someone has recently migrated another WordPress site
 * into this one.
 *
 * @param {Object} state Global state tree
 * @param {Object} siteId Site ID
 * @returns {boolean} True if site has recently been the target of a migration
 */
export default function isSiteRecentlyMigrated( state, siteId ) {
	const site = getRawSite( state, siteId );
	const siteMigrationMeta = get( site, 'site_migration', {} );

	return !! get( siteMigrationMeta, 'recent_migration', false );
}
