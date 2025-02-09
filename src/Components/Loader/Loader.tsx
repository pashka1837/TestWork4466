export function Loader() {
  return (
    <div
      className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "rgba(var(--bs-primary-rgb), 0.2",
      }}
    >
      <div
        className="spinner-border text-primary spinner-border-xl"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
