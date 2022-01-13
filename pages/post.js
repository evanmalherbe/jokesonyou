import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";

// Styling for logo
const imgStyle = {
  width: 500,
};

const Post = (props) => (
  <Layout>
    <h1>Planet name: {props.planet.name}</h1>
    <div className="both">
      <div className="left">
        <ul>
          <li>
            <b>Terrain:</b> {props.planet.terrain}
          </li>
          <li>
            <b>Climate:</b> {props.planet.climate}
          </li>
          <li>
            <b>Population: </b>
            {props.planet.population}
          </li>
          <li>
            <b>Diameter:</b> {props.planet.diameter}
          </li>
        </ul>
      </div>
      <div className="right">
        {" "}
        <Image
          src="/static/images/planetImg.jpg"
          alt="Star Wars planet"
          style={imgStyle}
        />
      </div>
    </div>
    {/* Styling for page */}
    <style jsx>{`
      .both {
        display: flex;
        flex-direction: row;
      }
      .left {
        flex: 1;
      }
      .right {
        flex: 1;
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
  const res = await fetch(`https://swapi.dev/api/planets/${id}`);
  const planet = await res.json();

  console.log(`Fetched plant: ${planet.name}`);

  return { planet };
};

export default Post;
