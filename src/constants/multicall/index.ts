import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '', // TODO
  [ChainId.TESTNET]: '0x78982Fa5E565f7A6980DC0C303A58194f3eca922'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
