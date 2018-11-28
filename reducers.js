const redux = require('redux');
const { combineReducers } = redux;
const actions = require('./actions');
const { SET_WALLET_NAME, SET_WALLET_CURRENCY} = actions;

/*

STATE OBJECT

{
  walletName: <string>
  walletCurrency: <string>
  hasBackup: <boolean>
}

 */
function walletName(name = null, action) {
  switch (action.type) {
    case SET_WALLET_NAME:
      return action.walletName;
    default:
      return name
  }
}

function walletCurrency(currency = null, action) {
  switch (action.type) {
    case SET_WALLET_CURRENCY:
      return action.walletCurrency;
    default:
      return currency
  }
}

// function posts(
//   state = {
//     isFetching: false,
//     didInvalidate: false,
//     items: []
//   },
//   action
// ) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//       return Object.assign({}, state, {
//         didInvalidate: true
//       })
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         didInvalidate: false
//       })
//     case RECEIVE_POSTS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         didInvalidate: false,
//         items: action.posts,
//         lastUpdated: action.receivedAt
//       })
//     default:
//       return state
//   }
// }
//
// function postsBySubreddit(state = {}, action) {
//   switch (action.type) {
//     case INVALIDATE_SUBREDDIT:
//     case RECEIVE_POSTS:
//     case REQUEST_POSTS:
//       return Object.assign({}, state, {
//         [action.subreddit]: posts(state[action.subreddit], action)
//       })
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  walletName,
  walletCurrency
});

module.exports = rootReducer;