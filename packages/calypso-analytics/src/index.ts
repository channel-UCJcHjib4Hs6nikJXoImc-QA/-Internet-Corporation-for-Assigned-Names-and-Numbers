/**
 * Re-export
 */
export { default as getDoNotTrack } from './utils/do-not-track';
export { getCurrentUser, setCurrentUser } from './utils/current-user';
export { getPageViewParams, getMostRecentUrlPath } from './page-view-params';
export {
	recordTracksPageView,
	recordTracksPageViewWithPageParams,
	recordTracksEvent,
	identifyUser,
	initializeAnalytics,
	getTracksAnonymousUserId,
	getTracksLoadPromise,
	analyticsEvents,
	pushEventToTracksQueue,
	getGenericSuperPropsGetter,
} from './tracks';
export {
	recordTrainTracksRender,
	recordTrainTracksInteract,
	getNewRailcarId,
} from './train-tracks';

export type { Railcar } from './train-tracks';
