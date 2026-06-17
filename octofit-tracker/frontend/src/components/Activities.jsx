import { useEffect, useState } from 'react'

const resource = 'activities'
const requiredEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`
const codespaceName = import.meta.env.VITE_CODESPACE_NAME
const baseHost = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'
const apiUrl = `${baseHost}/api/${resource}/`

function normalizeUrl(link) {
  if (!link) return null
  if (link.startsWith('http')) return link
  return `${baseHost}${link.startsWith('/') ? '' : '/'}${link}`
}

function normalizeResponse(response) {
  const items = Array.isArray(response)
    ? response
    : Array.isArray(response.results)
    ? response.results
    : Array.isArray(response.data)
    ? response.data
    : []

  return {
    items,
    next:
      normalizeUrl(
        response.next || response.pagination?.next || response.meta?.next || null,
      ),
    previous:
      normalizeUrl(
        response.previous || response.pagination?.previous || response.meta?.previous || null,
      ),
  }
}

function renderItem(item, index) {
  return (
    <li key={index} className="resource-item">
      <strong>{item.title || item.activity || `Activity ${index + 1}`}</strong>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </li>
  )
}

export default function Activities() {
  const [items, setItems] = useState([])
  const [links, setLinks] = useState({ next: null, previous: null })
  const [currentUrl, setCurrentUrl] = useState(apiUrl)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(currentUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${resource}: ${response.status}`)
        }
        return response.json()
      })
      .then((responseData) => {
        const normalized = normalizeResponse(responseData)
        setItems(normalized.items)
        setLinks({ next: normalized.next, previous: normalized.previous })
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [currentUrl])

  return (
    <section className="resource-page">
      <h2>Activities</h2>
      {!codespaceName && (
        <p className="warning">
          `VITE_CODESPACE_NAME` is undefined. Using localhost fallback for the API.
        </p>
      )}
      <p className="api-info">
        API URL: <code>{apiUrl}</code>
      </p>
      {loading ? (
        <p>Loading activities...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : items.length === 0 ? (
        <p>No activities found.</p>
      ) : (
        <ul className="resource-list">{items.map(renderItem)}</ul>
      )}
      <div className="pagination">
        {links.previous && (
          <button type="button" onClick={() => setCurrentUrl(links.previous)}>
            Previous
          </button>
        )}
        {links.next && (
          <button type="button" onClick={() => setCurrentUrl(links.next)}>
            Next
          </button>
        )}
      </div>
    </section>
  )
}
