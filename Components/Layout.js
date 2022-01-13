import Header from "./Header";

const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    {/* Global styles for whole app */}
    <style global jsx>{`
      body {
        font-size: 16px;
        font-family: "Open Sans", Arial, sans-serif;
      }
      li {
        line-height: 2rem;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

export default Layout;
