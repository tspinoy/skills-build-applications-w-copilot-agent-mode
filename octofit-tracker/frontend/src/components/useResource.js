import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export function useResource(component) {
  const [state, setState] = useState({ data: [], loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((data) => active && setState({ data, loading: false, error: '' }))
      .catch((error) => active && setState({ data: [], loading: false, error: error.message }))
    return () => { active = false }
  }, [component])

  return state
}