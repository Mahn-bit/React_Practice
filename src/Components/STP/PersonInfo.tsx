import React, { useState } from "react";
import { useUserStore } from "../../store/personStore";

function PersonInfo() {
  const { users, updateUsers } = useUserStore();
  const [userName, setUserName] = useState("");
  return (
    <>
      <h1>PersonInfo</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateUsers(userName);
            setUserName("");
          }
        }}
        value={userName}
      />
      <button
        onClick={() => {
          updateUsers(userName);
          setUserName("");
        }}
      >
        Enter
      </button>
    </>
  );
}

export default PersonInfo;
