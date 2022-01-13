import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";

// Styling for logo
const imgStyle = {
  width: "40rem",
  border: "1px #97afa3 solid",
};

const Post = (props) => (
  <Layout>
    <div className="both">
      <div className="left">
        <div className="setup">{props.joke.setup}</div>
        <div className="delivery">{props.joke.delivery}</div>
      </div>
      <div className="right">
        {" "}
        <Image
          src="/static/images/girl.jpg"
          alt="Girl laughing"
          style={imgStyle}
        />
      </div>
    </div>
    {/* Styling for page */}
    <style jsx>{`
      .both {
        display: flex;
        flex-direction: row;
        padding-top: 1rem;
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
      }
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;

        padding: 1rem;
        margin-right: 0.5rem;
      }
      .right {
        flex: 1;
      }
      .setup {
        font-size: 1.5rem;
      }
      .delivery {
        font-weight: bold;
        margin-top: 2rem;
        font-size: 1.5rem;
        color: blue;
      }
    `}</style>
  </Layout>
);

/* Here we once again use getInitialProps. This time we retrieve
data from the TVMaze API using the ID passed through from index.js.
The first argument of the function is the context object.
It has a query field that we can use to fetch information.
In our example, we picked the show ID from query params and fetched its show data from the TVMaze API. */
Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
  const joke = await res.json();

  //console.log(`Fetched planet: ${planet.name}`);

  return { joke };
};

export default Post;
