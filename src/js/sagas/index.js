import {call, put, fork, takeLatest} from 'redux-saga/effects';

import {createSetDefaultItemsAction} from '../actions/creators';

import {LOAD_DEFAULT_ITEMS} from '../actions/types';

import {apiLoadDefaultItems} from '../api/index';

function* loadDefaultItems() {
	try {
		const items = yield call(apiLoadDefaultItems);
		yield put(createSetDefaultItemsAction(items));
	} catch (e) {
		console.error(e);
	}
}

function* watchLoadDefaultItems() {
	yield takeLatest(LOAD_DEFAULT_ITEMS, loadDefaultItems)
}

// main saga generators
export function* sagas() {
  yield [
  	fork(watchLoadDefaultItems)
  ]
}
