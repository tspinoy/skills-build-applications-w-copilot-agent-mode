import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

export default function Users() {
  const { data, loading, error } = useResource('users')
  return <ResourceState title="Users" loading={loading} error={error}>
    <div className="resource-grid">{data.map((user, index) => <article className="resource-card" key={user._id || index}><span className="card-kicker">Athlete</span><h3>{user.name || 'Unnamed user'}</h3><p>{user.email || 'No email listed'}</p></article>)}</div>
  </ResourceState>
}