export default function NavBar() {
  return (
    <section className="navbar">
      <div className="navbar__left">
        <p>Medika</p>
        <div>
          <a href="#">Meditations</a>
          <a href="#">Mission</a>
          <a href="#">Purpose</a>
          <a href="#">Articles</a>
          <a href="#">About us</a>
        </div>
      </div>

      <div className="navbar__right">
        <button className="register">Register for free</button>
        <button className="menu">
          <svg
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H15M1 1H15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
