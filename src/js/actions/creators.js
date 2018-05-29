import {
	LOAD_DEFAULT_ITEMS,
	SET_DEFAULT_ITEMS,
	MOVE_TO_TARGET,
	SET_ACTIVE_ITEM,
	SET_VALID_DRAG
} from './types';

export const createLoadDefaultItemsAction = () => ({
	type: LOAD_DEFAULT_ITEMS
});

export const createSetDefaultItemsAction = (items) => ({
	type: SET_DEFAULT_ITEMS,
	payload: items
});

export const createMoveToTargetAction = () => ({
	type: MOVE_TO_TARGET
});

export const createSetActiveItemAction = (item) => ({
	type: SET_ACTIVE_ITEM,
	payload: item
});

export const createSetValidDragAction = (isValid) => ({
	type: SET_VALID_DRAG,
	payload: isValid
});
