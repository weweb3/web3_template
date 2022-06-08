import Image from 'next/image'

const styles = {
  statContainer: `flex flex-col items-center justify-center px-8 py-4 md:border-0`,
}

type Props = {
  total_supply: number
  num_owners: number
  floor_price: number
  total_volume: number
}
export default function CollectionStats(stats: Props) {
  function formatStat(stat: number) {
    if (!stat) return
    if (stat >= 1000000000) {
      return (stat / 1000000000).toFixed(1) + 'G'
    }
    if (stat >= 1000000) {
      return (stat / 1000000).toFixed(1) + 'M'
    }
    if (stat >= 1000) {
      return (stat / 1000).toFixed(1) + 'K'
    }
    if (stat >= 1) {
      return Math.floor(stat)
    }
    return stat.toFixed(3)
  }

  return (
    <div className="grid grid-cols-2 rounded-xl border md:grid-cols-4 md:divide-x">
      <div className={styles.statContainer}>
        <p className="text-2xl font-bold">{formatStat(stats?.total_supply)}</p>
        <span className="text-sm text-gray-400">items</span>
      </div>
      <div className={styles.statContainer}>
        <p className="text-2xl font-bold">{formatStat(stats?.num_owners)}</p>
        <span className="text-sm text-gray-400">owners</span>
      </div>
      <div className={styles.statContainer}>
        <div className="flex items-center space-x-1">
          <Image height={20} width={20} src="/eth-logo.svg" alt="Eth Logo" />
          <p className="text-2xl font-bold">{formatStat(stats?.floor_price)}</p>
        </div>
        <span className="text-sm text-gray-400">floor price</span>
      </div>
      <div className={`${styles.statContainer}`}>
        <div className="flex items-center space-x-1">
          <Image height={20} width={20} src="/eth-logo.svg" alt="Eth Logo" />
          <p className="text-2xl font-bold">
            {formatStat(stats?.total_volume)}
          </p>
        </div>
        <span className="text-sm text-gray-400">volume traded</span>
      </div>
    </div>
  )
}
