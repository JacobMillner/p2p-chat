import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import { username, user } from "../../user";
import style from "./style.css";

const logout = (): void => {
  user.leave();
  username.set("");
};

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>Gun Chat</h1>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        {!username && (
          <Link activeClassName={style.active} href="/login">
            Login
          </Link>
        )}
        {username && (
          <span>
            <h1>Hello, {username}!</h1>
            <span>
              <img
                src={`https://avatars.dicebear.com/api/initials/${username}.svg`}
              />
            </span>
            <button onClick={logout} />
          </span>
        )}
      </nav>
    </header>
  );
};

export default Header;
