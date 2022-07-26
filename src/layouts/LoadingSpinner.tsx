import { SemipolarSpinner, HalfCircleSpinner } from "react-epic-spinners";

export const LoadingSpinner = () => {
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
      <HalfCircleSpinner color="#fecd1f" />;
    </div>
  );
};
