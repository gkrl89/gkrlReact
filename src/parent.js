import React from "react";
import Child from "./child";

export default function Parent() {
  const [parentInput, setParentInput] = React.useState();
  const [childInput, setChildInput] = React.useState();
  return (
    <div className="Parent">
      <h4>Parent</h4>
      <input
        value={parentInput}
        placeholder="input to child..."
        onChange={(e) => setParentInput(e.target.value)}
      />
      <br />
      <span>{childInput}</span>
      <div className="Center">
        <Child toChild={parentInput} fromChild={setChildInput} />
      </div>
    </div>
  );
}
