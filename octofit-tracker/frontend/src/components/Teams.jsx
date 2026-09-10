import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  const { data, loading, error } = useResource('teams', teamsEndpoint)
  return <ResourceState title="Teams" loading={loading} error={error}>
    <div className="resource-grid">{data.map((team, index) => <article className="resource-card" key={team._id || index}><span className="card-kicker">Team</span><h3>{team.name || 'Unnamed team'}</h3><p>{team.description || 'Ready for a new challenge.'}</p><small>{team.members?.length || 0} members</small></article>)}</div>
  </ResourceState>
}