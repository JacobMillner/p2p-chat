import { useState } from "preact/hooks";

import GUN from "gun";
import "gun/sea";
import "gun/axe";

// database
export const db = GUN();

// gun user
export const user = db.user().recall({ sessionStorage: true });

const useAuth = () => {
  const [username, setUsername] = useState();

  user.get("alias").on((v) => setUsername(v));

  db.on("auth", async (event) => {
    const alias = await user.get("alias");
    setUsername(alias);

    console.log(`signed in as ${alias}`);
  });

  return "auth";
};

export default useAuth;
