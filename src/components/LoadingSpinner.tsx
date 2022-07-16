import { SemipolarSpinner } from "react-epic-spinners";

function LoadingSpinner() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SemipolarSpinner />;
    </div>
  );
}

export default LoadingSpinner;
