import { Horizon } from "@stellar/stellar-sdk";

// Initialize Stellar server (using public mainnet)
const server = new Horizon.Server("https://horizon.stellar.org");



export async function fetchStellarTransactionOperations(pubKey:string) {
  try {
    // Fetch transactions for the account
    const transactionsResponse = await server
      .transactions()
      .forAccount(pubKey)
      .call();

    const transactions = transactionsResponse.records.map((transaction) => {
      return {
        id: transaction.id,
        hash: transaction.hash,
        timestamp: transaction.created_at,
        sourceAccount: transaction.source_account,
        operationCount: transaction.operation_count,
        successful: transaction.successful,
        ledger: transaction.ledger,
        memo: transaction.memo || undefined,
        memoType: transaction.memo_type,
        feeCharged: transaction.fee_charged,
      };
    });

   
    return transactions;
  } catch (error) {
    console.error("Error fetching Stellar transactions:", error);
    throw new Error("Failed to fetch transactions from Stellar network");
  }
}

export async function fetchAcc(pubkey: string) {
  return await server.accounts().accountId(pubkey).call();
}

