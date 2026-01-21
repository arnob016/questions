// https://developers.stellar.org/docs/data/apis/horizon/api-reference/resources/accounts
// https://developers.stellar.org/docs/data/apis/horizon/api-reference/resources/transactions

import { STELLAR_ACCOUNT } from "./account";

const account = await fetch(`https://horizon.stellar.org/accounts/${STELLAR_ACCOUNT}`);
const accountData = await account.json();

const transections = await fetch(`https://horizon.stellar.org/accounts/${STELLAR_ACCOUNT}/transactions`);

const transectionId = "fd6a2161debd04d74b1a5d043a50fe19fe99899874b8f72ee341d6210e829576";

const fetchOperations = await fetch(`https://horizon.stellar.org/transactions/${transectionId}/operations`);    
const operationsData = await fetchOperations.json();

console.log("Account Data:", accountData);
console.log("Transections Data:", await transections.json());
console.log("Operations Data for Transection ID", transectionId, ":", operationsData);