import { z } from "zod";
import { fetchAcc, fetchStellarTransactionOperations } from "~/lib/stellar/trx-api";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



export const transactionRouter = createTRPCRouter({
    getAcc: publicProcedure.input(z.object({publicKey: z.string()})).query(async ({ input }) => {
    return await fetchAcc(input.publicKey);
  }),
  // Get all transactions
  getAll: publicProcedure.input(z.object({publicKey: z.string()})).query(async ({ input }) => {
    const transactions = await fetchStellarTransactionOperations(input.publicKey);
    
    return {
      transactions,
    };
  }),

  // Get transaction by ID 
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // nothing
      return [];
    }),
});
