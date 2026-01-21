
import { Horizon } from "@stellar/stellar-sdk";
// Stellar account to fetch operations for
export const STELLAR_ACCOUNT = "GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK";

// Initialize Stellar server (using public mainnet)
export const server = new Horizon.Server("https://horizon.stellar.org");

const accUrl = `https://horizon.stellar.org/accounts/${STELLAR_ACCOUNT}`


const acc = await server.accounts().accountId(STELLAR_ACCOUNT).call()
// console.log(acc);


// fetch(accUrl).then(res => res.json().then(res => console.log(res)));

/* demo responase
{
  _links: {
    self: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK'
    },
    transactions: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/transactions{?cursor,limit,order}',
      templated: true
    },
    operations: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/operations{?cursor,limit,order}',
      templated: true
    },
    payments: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/payments{?cursor,limit,order}',
      templated: true
    },
    effects: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/effects{?cursor,limit,order}',
      templated: true
    },
    offers: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/offers{?cursor,limit,order}',
      templated: true
    },
    trades: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/trades{?cursor,limit,order}',
      templated: true
    },
    data: {
      href: 'https://horizon.stellar.org/accounts/GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK/data/{key}',
      templated: true
    }
  },
  id: 'GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK',
  account_id: 'GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK',
  sequence: '234325779217907744',
  sequence_ledger: 60457134,
  sequence_time: '1766638459',
  subentry_count: 13,
  last_modified_ledger: 60719313,
  last_modified_time: '2026-01-11T13:01:11Z',
  thresholds: { low_threshold: 0, med_threshold: 0, high_threshold: 0 },
  flags: {
    auth_required: false,
    auth_revocable: false,
    auth_immutable: false,
    auth_clawback_enabled: false
  },
  balances: [
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 56296539,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum4',
      asset_code: '3YH',
      asset_issuer: 'GDJXOULFH2J67NHRKQ2FCCGQV5YRRXHPXVKIRCXTDHK2PSNLYI22XMBY'
    },
    {
      balance: '157505.0260394',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60570690,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'ACTION',
      asset_issuer: 'GABHBO4IAEAKYODTIQC5G43MPD55BREA4P3MAXAMZKLEVQNF3S7PZFDU'
    },
    {
      balance: '9370221.0064185',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60569504,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'BANDCOIN',
      asset_issuer: 'GCMEPWXKQ4JCBE4NRRFTPAOP22N3NXUHTHJQSWRSKRD7APA6C7T4ESLG'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60132973,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'BANDT',
      asset_issuer: 'GBOE27YS66PTI6KO7ZSDAA6HTW3IKST64IGETIKONWTYJT7347TTAYIH'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60253024,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum4',
      asset_code: 'BEAM',
      asset_issuer: 'GDEILZUKOHS2GY4OAVBIMCSNSOEKO7GQPQRRKUHGSH7OZA7L7NNGR7K2'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60381103,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'bouncemas',
      asset_issuer: 'GBIYWTUOFAGPXVYQ5FMBX5BMJGIDQXNHGSNP234KYIPT2WVIQ2B52BOK'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60381096,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'Fyron',
      asset_issuer: 'GCCSK3VUK4AQ2C7DZYX2T7H4TRTAU2HZ22PBNFI2LD4CM3DP3D5I2TP2'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60132988,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'HASSET',
      asset_issuer: 'GAOEQ3Y33YTPNOAE77JFMVWTHLOCLLRDS2ML2PGHDTKWFQJOXB3KWTE6'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 58851975,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'HOLLOWVOX',
      asset_issuer: 'GBPC4LULQFYZ3C5UD4C7ALAYIOXZ3L7I77XBTXQ7PLSUOXQUUZAVLMAX'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 56296533,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'INSTAMIX',
      asset_issuer: 'GBWKBMTBI3Q5C2M2CZNA6KHPIL7KBGCFGMYKM643KNG7MQ3442LK7ARA'
    },
    {
      balance: '0.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60133001,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'JESTER',
      asset_issuer: 'GCCT622L4LNQAY6OY2M6XRVHTKW54MNIGVTRPBSFUMLV4BRY2IOBR2U2'
    },
    {
      balance: '1.1530379',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 60256138,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum4',
      asset_code: 'USDC',
      asset_issuer: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN'
    },
    {
      balance: '12535.0000000',
      limit: '922337203685.4775807',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      last_modified_ledger: 59499536,
      is_authorized: true,
      is_authorized_to_maintain_liabilities: true,
      asset_type: 'credit_alphanum12',
      asset_code: 'Wadzzo',
      asset_issuer: 'GDEL52F3VNFTARVKRL5NYME54NMLGMRO7MU2ILDEGO2LBAUKKKBQYMV3'
    },
    {
      balance: '27.1347752',
      buying_liabilities: '0.0000000',
      selling_liabilities: '0.0000000',
      asset_type: 'native'
    }
  ],
  signers: [
    {
      weight: 1,
      key: 'GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK',
      type: 'ed25519_public_key'
    }
  ],
  data: {},
  num_sponsoring: 0,
  num_sponsored: 0,
  paging_token: 'GCMTJCWDCE6AVBJMFCYIIPSLISCOTG3W62MMYKQOWBC2M4SJ65DEMUYK'
}
*/
