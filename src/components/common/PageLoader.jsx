export default function PageLoader({ isLoading }) {
  return (
    <div className={`page-loader ${isLoading ? "is-loading" : ""}`} aria-hidden={!isLoading}>
      <span />
    </div>
  );
}
