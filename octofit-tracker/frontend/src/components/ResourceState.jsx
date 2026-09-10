export function ResourceState({ title, children, loading, error }) {
  return (
    <section className="resource-page">
      <div className="section-heading">
        <p className="eyebrow">OctoFit community</p>
        <h2>{title}</h2>
      </div>
      {loading && <p className="state-message">Loading {title.toLowerCase()}...</p>}
      {error && <p className="state-message error-message" role="alert">{error}</p>}
      {!loading && !error && children}
    </section>
  )
}