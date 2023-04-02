import { providers } from "ethers";

type TxnResponse = providers.TransactionResponse;

const provider = new providers.EtherscanProvider(1, "YourApiKeyToken");

const getUserTxns = async (address: string): Promise<TxnResponse[]> => { 
    const txns = await provider.getHistory(address);
    return txns;
}


// const getBalance = async (address: string): Promise<number> => {}