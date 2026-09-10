import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

export default function Activities() {
  const { data, loading, error } = useResource('activities')
  return <ResourceState title="Activities" loading={loading} error={error}>
    <div className="resource-grid">{data.map((activity, index) => <article className="resource-card" key={activity._id || index}><span className="card-kicker">{activity.type || 'Workout'}</span><h3>{activity.user || 'Anonymous athlete'}</h3><p>{activity.duration || 0} minutes</p><small>{activity.date ? new Date(activity.date).toLocaleDateString() : 'Date not provided'}</small></article>)}</div>
  </ResourceState>
}