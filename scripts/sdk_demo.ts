// https://stellar.github.io/js-stellar-sdk/module-Horizon.Server.html#transactions
import { server, STELLAR_ACCOUNT } from "./account";

const accounts = await server.accounts().call();
const aAccount = await server.accounts().accountId(STELLAR_ACCOUNT).call();

const transections = await server.transactions().call();
const accountTransections = await server.transactions().forAccount(STELLAR_ACCOUNT).call();
const transectionDetails = await server.transactions().transaction("transectionId").call();



const allOperations = await server.operations().forAccount(STELLAR_ACCOUNT).call();
const operatinDetails = await server.operations().operation("operationId").call();
const accountOperations = await server.operations().forAccount(STELLAR_ACCOUNT).call();

