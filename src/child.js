import React from "react";

export default function Child(props) {
  return (
    <div className="Child">
      <h4>Child</h4>
      <input
        placeholder="input to parent..."
        onChange={(e) => props.fromChild(e.target.value)}
      />
      <br />
      <span>{props.toChild}</span>
    </div>
  )
}
