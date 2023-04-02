import { BigNumber, providers } from "ethers";

type TxnResponse = providers.TransactionResponse;
const provider = new providers.EtherscanProvider(1, "YourApiKeyToken");

export const extractBalanceSent = (address: string, txns: TxnResponse[]): number => {
    const filteredTxns = txns.filter(txn => txn.from === address);
    return filteredTxns.reduce((acc, txn) => acc + Number(txn.value), 0);
}

export const extractBalanceRecieved = (address: string, txns: TxnResponse[]): number => {
    const filteredTxns = txns.filter(txn => txn.from !== address);
    return filteredTxns.reduce((acc, txn) => acc + Number(txn.value), 0);
}

export const extractIncomingTxns = (address: string, txns: TxnResponse[]): number => {
    return txns.filter(txn => txn.from !== address).length;
}

export const extractOutgoingTxns = (address: string, txns: TxnResponse[]): number => {
    return txns.filter(txn => txn.from === address).length;
}

export const getEtherPrice = (): Promise<number> => provider.getEtherPrice();

export const getWalletBalance = (address: string): Promise<BigNumber> => {
    return provider.getBalance(address);
}

export const convertEthToUSD = async (eth: number): Promise<number> => {
    return eth * await provider.getEtherPrice();
}

export const convertUsdToEth = async (usd: number): Promise<number> => {
    return usd / await provider.getEtherPrice();
}
