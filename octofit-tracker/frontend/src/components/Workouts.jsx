import { ResourceState } from './ResourceState.jsx'
import { useResource } from './useResource.js'

export default function Workouts() {
  const { data, loading, error } = useResource('workouts')
  return <ResourceState title="Workouts" loading={loading} error={error}>
    <div className="resource-grid">{data.map((workout, index) => <article className="resource-card" key={workout._id || index}><span className="card-kicker">{workout.difficulty || 'All levels'}</span><h3>{workout.name || 'Untitled workout'}</h3><p>{workout.description || 'A focused session for your next goal.'}</p><small>{workout.duration || 0} minutes</small></article>)}</div>
  </ResourceState>
}