import type { ProposalTypes } from '@walletconnect/types';

// types
import chainReferenceFromGenesisHash from '@utils/chainReferenceFromGenesisHash';

/**
 * Convenience function to create the WalletConnect namespaces.
 * @param {string} genesisHash - An AVM genesis hash.
 * @returns {ProposalTypes.RequiredNamespaces} The WalletConnect namespaces based on the AVM genesis hash.
 */
export default function namespacesFromGenesisHash(
  genesisHash: string
): ProposalTypes.RequiredNamespaces {
  return {
    algorand: {
      chains: [`algorand:${chainReferenceFromGenesisHash(genesisHash)}`],
      events: [],
      methods: ['algo_signTxn'],
    },
    avm: {
      chains: [`avm:${chainReferenceFromGenesisHash(genesisHash)}`],
      events: [],
      methods: ['avm_signTransactions', 'avm_signMessage'],
    },
  };
}
