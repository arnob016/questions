# Interview Challenge

## Overview
This is a **real-world coding challenge** working with Stellar blockchain data. You'll enhance a basic transaction viewer by implementing proper data display, modal views, and database persistence using Next.js, tRPC, and Stellar SDK/API.

## Current State
✅ Basic transaction fetching via tRPC  
✅ Stellar API/SDK demo files in `scripts/` folder  
✅ Helper files: `lib/stellar/trx-api.ts` and `lib/stellar/trx-sdk.ts`  
✅ shadcn/ui components installed (Card, Dialog, Skeleton)  
✅ Drizzle ORM configured for database

---

## Important Resources

### 📚 Documentation & Demo Code
- **Horizon API Docs**:
   - https://developers.stellar.org/docs/data/apis/horizon/api-reference/resources/transactions
    
    - https://developers.stellar.org/docs/data/apis/horizon/api-reference/resources/accounts    
- **Stellar SDK Docs**: https://stellar.github.io/js-stellar-sdk/module-Horizon.Server.html#transactions

- **Demo Files**:
  - [`scripts/api_demo.ts`](scripts/api_demo.ts) - Horizon API examples
  - [`scripts/sdk_demo.ts`](scripts/sdk_demo.ts) - Stellar SDK examples
  - [`scripts/account.ts`](scripts/account.ts) - Account setup and response examples

### 🛠️ Implementation Files
- [`lib/stellar/trx-api.ts`](lib/stellar/trx-api.ts) - Direct Horizon API approach
- [`lib/stellar/trx-sdk.ts`](lib/stellar/trx-sdk.ts) - Stellar SDK approach
- Currently using **trx-api** methods in the app

**Note:** You can use either Horizon API or Stellar SDK - choose what you prefer!

---

## Your Tasks

### **Task 1: Debug & Display Proper Transaction Data (20 min)**

**Current Problem:** 
- Transaction data is displayed but may not show all relevant information
- No loading states or skeletons
- No pagination - showing all transactions at once

**Requirements:**
1. **Debug the Data** - Review what transaction data is available and display useful information:
   - Transaction hash (clickable)
   - Timestamp (readable format, not UTC string)
   - Source account (shortened)
   - Operation count
   - Fee charged (in XLM)
   - Success/failure status
   - Memo (if present)

2. **Add Loading Skeleton** - Replace "Loading..." with proper skeleton screens
   - Use shadcn `Skeleton` component
   - Show skeleton cards while data loads

3. **Implement Pagination** - Add client-side or server-side pagination
   - Show 20 transactions per page
   - Add Previous/Next buttons
   - Display current page and total pages
   - Consider using shadcn `Button` component


---

### **Task 2: Transaction Details Modal with Operations (25 min)**

**Current Problem:** 
- Users can't see transaction details or operations
- No way to view XDR, source account details, or grouped operations

**Requirements:**
1. **Click to View Details** - When clicking a transaction card:
   - Open a modal using shadcn's `Dialog` component
   - Fetch transaction details (if not already available)
   - Show comprehensive transaction information:
     - Full transaction hash
     - Source account (full address)
     - Ledger number
     - Timestamp
     - Fee charged
     - Memo and memo type
     - **Envelope XDR** (transaction envelope)
     - Result XDR (if available)
     - Success/failure status

2. **Display Operations** - Show all operations for this transaction:
   - Operation type
   - Operation details (from, to, amount, asset)
   - Source account for each operation
   - Group operations by transaction ID

3. **Operations in Main View** - In the transaction list:
   - Show operation count per transaction
   - Consider adding operation type badges

**Hints:**
- Use `api.transaction.getById` tRPC endpoint
- Fetch operations: `https://horizon.stellar.org/transactions/{transactionId}/operations`
- Or SDK: `server.operations().forTransaction(transactionId).call()`
- Display XDR in a scrollable code block (use `font-mono` class)



---

### **Task 3: Database Persistence (25 min)**

**Current Problem:** 
- All data is fetched from Stellar API each time
- No data persistence
- No ability to track historical data

**Requirements:**
1. **Create Database Schema** - Design tables for:
   - Transactions table:
     - id, hash, timestamp, source_account
     - operation_count, successful, ledger
     - fee_charged, memo, memo_type
     - envelope_xdr, result_xdr
     - created_at, updated_at

   - Operations table:
     - id, transaction_id (foreign key)
     - operation_type, source_account
     - amount, asset_code, asset_type
     - from_account, to_account
     - created_at

2. **Implement Data Storage** - When fetching transactions:
   - Save/update transactions in database
   - Save/update operations in database
   - Handle duplicates (upsert logic)

3. **Query from Database** - Update tRPC endpoints:
   - Fetch from database first
   - Fall back to Stellar API if needed
   - Implement pagination at database level

**Hints:**
- Use Drizzle ORM (already configured)
- Schema location: [`src/server/db/schema.ts`](src/server/db/schema.ts)
- Check existing post schema as reference
- Use `db:push` script to push schema changes

**Files to modify:**
- [`src/server/db/schema.ts`](src/server/db/schema.ts)
- [`src/server/api/routers/transaction.ts`](src/server/api/routers/transaction.ts)

---

## Getting Started

### 1. Install dependencies (if not done)
```bash
npm install
```

### 2. Start the dev server
```bash
npm run dev
```

### 3. Explore demo scripts
```bash
# See Horizon API examples
npx tsx scripts/api_demo.ts

# See Stellar SDK examples
npx tsx scripts/sdk_demo.ts
```

### 4. Open the app
Navigate to [http://localhost:3000](http://localhost:3000)

---

## Project Structure
```
scripts/
├── api_demo.ts           # Horizon API examples
├── sdk_demo.ts           # Stellar SDK examples  
└── account.ts            # Account data & response examples
src/
├── app/
│   ├── page.tsx          # Main page
│   └── _components/
│       └── transaction-list.tsx  # YOUR MAIN WORK FILE
├── lib/stellar/
│   ├── trx-api.ts        # Horizon API methods (currently used)
│   └── trx-sdk.ts        # Stellar SDK methods
├── server/
│   ├── db/
│   │   ├── index.ts      # Database client
│   │   └── schema.ts     # Database schema (YOU'LL MODIFY)
│   └── api/routers/
│       └── transaction.ts # tRPC router (YOU'LL MODIFY)
└── components/ui/        # shadcn components
    ├── card.tsx
    ├── dialog.tsx
    ├── skeleton.tsx
    └── button.tsx
```

---

## Available tRPC Endpoints

### `api.transaction.getAll.useQuery({ publicKey: string })`
Returns all transactions for an account.

### `api.transaction.getById.useQuery({ id: string })`
Returns single transaction details (currently not implemented - you'll build this!).

### `api.transaction.getAcc.useQuery({ publicKey: string })`
Returns account information including balance.

---

## Time Management

- **Task 1**: ~30 minutes (data display, skeleton, pagination)
- **Task 2**: ~30 minutes (modal, operations, XDR display)
- **Task 3**: ~30 minutes (schema, persistence, queries)
- **Total**: ~90min

**Prioritize**: Task 1 → Task 2 → Task 3

---

## Tips

1. **Explore the demo files first** - Run the scripts to understand the data structure
2. **Choose your approach** - API or SDK, pick what feels more comfortable
3. **Start with displaying data** - Get the UI working before adding database
4. **Use TypeScript types** - Define interfaces for your data
5. **Test incrementally** - Check each feature works before moving on
6. **Check the docs** - Horizon API and SDK docs are your friends
7. **Don't overthink** - Working solution > perfect solution

---

## Stellar Data Context

### What are Transactions?
- A transaction contains one or more operations
- Each transaction has an XDR (External Data Representation)
- Transactions are grouped in ledgers

### What are Operations?
- Operations are actions: payments, account creation, etc.
- Multiple operations can be in one transaction
- Each operation has specific fields based on type

### Useful Endpoints
```bash
# Account info
GET https://horizon.stellar.org/accounts/{accountId}

# Transactions for account
GET https://horizon.stellar.org/accounts/{accountId}/transactions

# Operations for transaction
GET https://horizon.stellar.org/transactions/{transactionId}/operations

# Single transaction details
GET https://horizon.stellar.org/transactions/{transactionId}
```

---

## Need Help?

If you get stuck:
1. Check browser console for errors
2. Review demo scripts in `scripts/` folder
3. Check Horizon API docs: https://developers.stellar.org/docs/data/apis/horizon
4. Check SDK docs: https://stellar.github.io/js-stellar-sdk/
5. Look at existing `trx-api.ts` implementation

---

**Good luck! Focus on working code and clear data presentation. Show us your problem-solving skills! 🚀**
