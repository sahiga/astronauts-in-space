import Immutable from 'immutable';

import {
	SET_DEFAULT_ITEMS,
	MOVE_TO_TARGET,
	SET_ACTIVE_ITEM,
	SET_VALID_DRAG
} from '../actions/types';

const DndStateRecord = Immutable.Record({
	defaultItems: Immutable.Set(),
	dndItems: Immutable.Set(),
	activeItem: null,
	validDrag: false
});

const initialState = new DndStateRecord();

const setDefaultItems = (state, items) => {
	return state.set('defaultItems', Immutable.Set(items));
};

const moveToTarget = (state) => {
	const item = state.get('activeItem');

	if (!item) {
		return state.state('validDrag', false);
	} else {
		const defaultItems = state.get('defaultItems').delete(item);
		const dndItems = state.get('dndItems').add(item);
		return state.withMutations((oldState) => {
			return oldState.set('defaultItems', defaultItems)
				.set('dndItems', dndItems)
				.set('validDrag', false);
		});
	}

};

const setActiveItem = (state, item) => {
	return state.set('activeItem', item);
};

const setValidDrag = (state, isValid) => {
	if (isValid === state.get('validDrag')) {
		return state;
	} else {
		return state.set('validDrag', isValid);
	}
};

function dndReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DEFAULT_ITEMS:
			return setDefaultItems(state, action.payload);
		case MOVE_TO_TARGET:
			return moveToTarget(state);
		case SET_ACTIVE_ITEM:
			return setActiveItem(state, action.payload);
		case SET_VALID_DRAG:
			return setValidDrag(state, action.payload);
		default:
			return state;
	}
}

export default dndReducer;
