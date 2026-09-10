import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

const usersEndpoint = import.meta.env.VITE_CODESPACE_NAME?.trim()
  ? `https://${import.meta.env.VITE_CODESPACE_NAME.trim()}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

export default function Users() {
  const { data, loading, error } = useResource('users', usersEndpoint)
  return <ResourceState title="Users" loading={loading} error={error}>
    <div className="resource-grid">{data.map((user, index) => <article className="resource-card" key={user._id || index}><span className="card-kicker">Athlete</span><h3>{user.name || 'Unnamed user'}</h3><p>{user.email || 'No email listed'}</p></article>)}</div>
  </ResourceState>
}