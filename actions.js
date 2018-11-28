export const SET_WALLET_NAME = 'SET_WALLET_NAME'
export function setWalletName(walletName) {
  return {
    type: SET_WALLET_NAME,
    walletName
  }
}

// module.exports.SET_WALLET_NAME = SET_WALLET_NAME;
// module.exports.setWalletName = setWalletName;

export const SET_WALLET_CURRENCY = 'SET_WALLET_CURRENCY';
export function setWalletCurrency(walletCurrency) {
  return {
    type: SET_WALLET_CURRENCY,
    walletCurrency
  }
}

// module.exports.SET_WALLET_CURRENCY = SET_WALLET_CURRENCY;
// module.exports.setWalletCurrency = setWalletCurrency;