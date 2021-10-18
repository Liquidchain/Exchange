import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: ''
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: ''
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
	  {
        label: 'Analytics',
        href: ''
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/',
      },
    ]
  },
  {
    label: 'Community',
    icon: 'LanguageIcon',
    items: [
      {
        label: "Telegram",
        href: "https://t.me/LiquidchainChat",
      },
      {
        label: "Discord",
        href: "https://discord.gg/m5PafvkWSK",
      },
	  {
        label: "Twitter",
        href: "https://twitter.com/LiquidChainXLC",
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
	  {
        label: "Website",
        href: "https://liquidchain.net/",
      },
      {
        label: "Docs",
        href: "https://docs.liquidchain.net/",
      },
      {
        label: "Github",
        href: "https://github.com/Liquidchain",
      },
    ],
  },
]

export default config
