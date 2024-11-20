import logoImage from "../img/logoEventus.png"

export function Footer() {
  return (
    <footer className="footerPages">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img className="footerImage"
          src={logoImage}
          alt="Eventus" />
      </a>
      <br />
      <a className="footerEmail" href="mailto:eventusmaisprati@gmail.com">
        eventusmaisprati@gmail.com
      </a>
      <br />
      <div className="footerSocials">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-square-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};