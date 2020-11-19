import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_DATA, putData } from './actions';

function fetchData() {

    return fetch('https://cors-anywhere.herokuapp.com/http://users.bugred.ru/tasks/rest/list')
    .then(response => response.json())
    
}

function* dataWorker() {
    const data = yield call(fetchData);

    yield put(putData(data));
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, dataWorker)
}