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
  marginRight: "2rem",
  marginLeft: "auto",
  fontSize: "1.2rem",
  fontWeight: "bold",
};

const Header = () => (
  <div className="logoAndHeading">
    <Image
      src="/static/images/smiley.png"
      alt="Smiley face logo"
      style={logoStyle}
    />
    <h1>The World is a Funny Place</h1>
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
        background-color: #f5f4f6;
      }

      h1 {
        display: inline;
        margin-left: 1rem;
        color: #5e615e;
      }
    `}</style>
  </div>
);

export default Header;
