import { getUserTxns } from "../repositories/txns.repo";
import { extractBalanceRecieved, extractBalanceSent, extractIncomingTxns, extractOutgoingTxns, getEtherPrice } from "../repositories/balance.repo";

export type AddressStats = {
    balanceSent: number;
    balanceReceived: number;
    txnCount: number;
    incomingTxns: number;
    outgoingTxns: number;

    walletsDrained: number;
    coinbaseWithdrawls: number;
    binanceWithdrawls: number;
    
    scamTokensHeld: number;
    erc20TokensHeld: number;
    erc721TokensHeld: number;
    erc1155TokensHeld: number;

    isContract: boolean;
    isVerified: boolean;

    firstTxnTime: Date;
    lastTxnTime: Date;

    transactionsPerDay: number;
    transactionsPerWeek: number;
    
    daysActive: Date[];
}

export const assembleAddressStatistics = async (address: string): Promise<AddressStats> => {
    const txns = await getUserTxns(address);

    const txnCount = txns.length;

    const incomingTxns = extractIncomingTxns(address, txns);
    const outgoingTxns = extractOutgoingTxns(address, txns);

    const balanceSent = extractBalanceSent(address, txns);
    const balanceReceived = extractBalanceRecieved(address, txns);    

    const etherPrice = await getEtherPrice();

    return {
        balanceSent,
        balanceReceived,
        txnCount,

        incomingTxns,
        outgoingTxns,
    };
}