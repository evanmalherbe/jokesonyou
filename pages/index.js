// Home page

// Import components and dependencies
import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const imgStyle = {
  width: "40rem",
  border: "1px solid #6f5f5d",
};

// Uses data from jokes api as props
const Index = (props) => (
  <Layout>
    <div className="page">
      <h1>Jokes</h1>
      <p>Click a joke to see the punchline!</p>
      <div className="indexDiv">
        <div className="jokes">
          <ul>
            {/* Create list of 5 jokes. Links lead to other page with punchlines */}
            {props.items.jokes.map((value) => {
              return (
                <li key={value.id}>
                  <Link as={`/p/${value.id}`} href={`/post?id=${value.id}`}>
                    <a>{value.setup}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="image">
          <Image
            src="/static/images/smiley2.jpg"
            alt="Smiley faces"
            style={imgStyle}
          />
        </div>
      </div>
    </div>
    {/* Styling for index page */}
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
        margin-top: 0rem;
      }
      .indexDiv {
        display: flex;
        flex-direction: row;
      }
      .jokes {
        display: flex;
        flex-direction: column;
        padding: 0rem 1rem 0rem 0rem;
        margin-right: 0.5rem;
        font-size: 1.1rem;
      }
      .image {
        margin-left: auto;
      }
      h1 {
        margin-bottom: 0;
        padding: 0;
      }
      p {
        margin-bottom: 1rem;
      }
    `}</style>
  </Layout>
);

/* Fetch data from jokes api with some parameters to get just the jokes I want (two part, no offensive jokes etc) */
Index.getInitialProps = async function () {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?type=twopart&format=json&lang=en&amount=5&blacklistFlags=nsfw,racist,sexist,explicit"
  );
  const data = await res.json();

  // Make available to index function as props
  return {
    items: data,
  };
};

// Export index component to be used by other files
export default Index;
