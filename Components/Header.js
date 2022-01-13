import Link from "next/link";
// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const logoStyle = {
  marginTop: 0,
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 15,
  width: 100,
};

const linkStyle = {
  marginRight: "1rem",
  marginLeft: "auto",
};

const Header = () => (
  <div className="logoAndHeading">
    <Image
      src="/static/images/starwarsLogo.png"
      alt="Star Wars"
      style={logoStyle}
    />
    <h1>Star Wars Planets</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* Styling for header */}
    <style jsx>{`
      a {
        margin-right: 1rem;
      }

      .logoAndHeading {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #dedede;
      }

      h1 {
        display: inline;
        margin-left: 1rem;
      }
    `}</style>
  </div>
);

export default Header;
