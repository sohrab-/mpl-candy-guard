/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export const withdrawStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'WithdrawInstructionArgs',
);
/**
 * Accounts required by the _withdraw_ instruction
 *
 * @property [_writable_] candyGuard
 * @property [_writable_, **signer**] authority
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export type WithdrawInstructionAccounts = {
  candyGuard: web3.PublicKey;
  authority: web3.PublicKey;
};

export const withdrawInstructionDiscriminator = [183, 18, 70, 156, 148, 109, 161, 34];

/**
 * Creates a _Withdraw_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Withdraw
 * @category generated
 */
export function createWithdrawInstruction(
  accounts: WithdrawInstructionAccounts,
  programId = new web3.PublicKey('Guard1JwRhJkVH6XZhzoYxeBVQe872VH6QggF4BWmS9g'),
) {
  const [data] = withdrawStruct.serialize({
    instructionDiscriminator: withdrawInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.candyGuard,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
