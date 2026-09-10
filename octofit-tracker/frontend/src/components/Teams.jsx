import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

export default function Teams() {
  const { data, loading, error } = useResource('teams')
  return <ResourceState title="Teams" loading={loading} error={error}>
    <div className="resource-grid">{data.map((team, index) => <article className="resource-card" key={team._id || index}><span className="card-kicker">Team</span><h3>{team.name || 'Unnamed team'}</h3><p>{team.description || 'Ready for a new challenge.'}</p><small>{team.members?.length || 0} members</small></article>)}</div>
  </ResourceState>
}