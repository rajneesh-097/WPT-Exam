import axios from "axios";
import { userEffect, userState } from "react";
export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}
function MyComponent() {
  return (
    <>
      <h2>Application</h2>
      <div>
        {" "}
        <input type="text" value={name} />
      </div>
      <div>
        {" "}
        <input type="text" value={id} />
      </div>
      <div>
        {" "}
        <input type="text" value={password} />
      </div>
    </>
  );
}
