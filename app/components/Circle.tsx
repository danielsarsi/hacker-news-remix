import { useTransition } from "remix";

function Circle() {
  const transition = useTransition();

  return (
    <div
      className={[
        "circle",
        transition.state === "loading" && "circle_loading",
      ].join(" ")}
    >
      <div className="circle_small_content">
        <div className="circle_small" />
      </div>
      <div className="circle_big" />
    </div>
  );
}

export default Circle;
