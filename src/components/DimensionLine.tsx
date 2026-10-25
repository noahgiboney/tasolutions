// Decorative drawing dimension, e.g. |◄──── ±.0001" ────►| (DESIGN.md §6).
export default function DimensionLine({ value }: { value: string }) {
  return (
    <div className="dimension" aria-hidden="true">
      <span className="dimension-end" />
      <span className="dimension-arrow dimension-arrow-left" />
      <span className="dimension-rule" />
      <span className="dimension-value">{value}</span>
      <span className="dimension-rule" />
      <span className="dimension-arrow dimension-arrow-right" />
      <span className="dimension-end" />
    </div>
  )
}
