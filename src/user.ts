import GUN from "gun";
import "gun/sea";
import "gun/axe";

// database
export const db = GUN();

// gun user
export const user = db.user().recall({ sessionStorage: true });

// current user name
export const username = writable("");

user.get("alias").on((v) => username.set(v));

db.on("auth", async (event) => {
  const alias = await user.get("alias");
  username.set(alias);

  console.log(`signed in as ${alias}`);
});
