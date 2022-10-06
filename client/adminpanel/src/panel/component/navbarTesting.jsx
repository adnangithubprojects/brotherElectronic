const user = JSON.parse(localStorage.getItem("token"));



return (
  <section className="navbar__container">
    <nav
      onClick={() => setMenu(!Menu)}
      className={Menu ? "navbar_menu navbaractive" : "navbar_menu"}
    >
      <Link className="navbar__items" to={"/"}>
        <FaHackerNews className="navbar__logo" />
      </Link>
      <Link className="navbar__items" to={"/"}>
        Home
      </Link>

      <>
        {user && (
          <>
            <Link className="navbar__items" to={"/postid-details"}>
              Add Post
            </Link>
            <Link className="navbar__items" to={"/favorite"}>
              Favorite
            </Link>
            <Link className="navbar__items" to={"/dashboard"}>
              Dashboard
            </Link>
          </>
        )}
      </>
      {user ? (
        <Link className="navbar__items" onClick={handleLogout} to={"/login"}>
          log out
        </Link>
      ) : (
        <>
          <Link className="navbar__items" to={"/login"}>
            Login
          </Link>
          <Link className="navbar__items" to={"/register"}>
            Register
          </Link>
        </>
      )}
    </nav>
    <div className="navbar__icons" onClick={() => setMenu(!Menu)}>
      {Menu ? <FaHamburger /> : <FaTimes />}
    </div>
  </section>
);
};

export default Navbar;