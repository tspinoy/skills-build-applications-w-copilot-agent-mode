import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

export default function Leaderboard() {
  const { data, loading, error } = useResource('leaderboard', leaderboardEndpoint)
  return <ResourceState title="Leaderboard" loading={loading} error={error}>
    <div className="leaderboard-list">{data.sort((a, b) => (a.rank || 999) - (b.rank || 999)).map((entry, index) => <article className="leaderboard-row" key={entry._id || index}><strong>#{entry.rank || index + 1}</strong><span>{entry.user || 'Unnamed athlete'}</span><b>{entry.points || 0} pts</b></article>)}</div>
  </ResourceState>
}