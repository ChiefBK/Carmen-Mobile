import { delay } from 'redux-saga'
import { put, takeEvery, all, call, take, select } from 'redux-saga/effects'
import { setWalletCurrency, setWalletName } from "./actions";

function* helloSaga() {
  console.log('Hello Sagas!')
}

export const CREATE_WALLET = 'CREATE_WALLET';

function* createWallet() {
  const {walletName, walletCurrency} = yield take(CREATE_WALLET);
  console.log("create wallet saga");

  put(setWalletName(walletName))
  put(setWalletCurrency(walletCurrency))

  const state = yield select()

  console.log('state after', state)
}

export default function* rootSaga() {
  yield all([helloSaga(), createWallet()])
}