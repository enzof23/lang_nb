import { CreateList, Home } from "./index";

export const Main: React.FC = () => {
  return (
    <div
      style={{
        marginTop: "130px",
        marginLeft: "3rem",
        color: "white",
      }}
    >
      <CreateList />
      <Home />
    </div>
  );
};
