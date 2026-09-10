const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function fetchCollection(component, endpoint = `${apiOrigin}/api/${component}/`) {
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Unable to load ${component}.`)
  }

  const payload = await response.json()
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.results)) return payload.results
  if (Array.isArray(payload.items)) return payload.items
  if (Array.isArray(payload.data)) return payload.data
  return []
}

export const apiConfiguration = codespaceName
  ? `Codespace API: ${codespaceName}-8000`
  : 'Local API fallback: localhost:8000'