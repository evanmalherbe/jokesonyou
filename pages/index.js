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

const Index = (props) => (
  <Layout>
    <div className="page">
      <h1>Jokes</h1>
      <p>Click a joke to see the punchline!</p>
      <div className="indexDiv">
        <div className="jokes">
          <ul>
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
    {/* Styling for header */}
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

/*

 // .indexDiv {
      //   margin-top: 1rem;
      //   padding: 1rem;
      //   background-color: #f0f8ff;
      //   border: 1px solid #dedede;
      // }
      
      In practice, we usually need to fetch data from a remote data source. 
Next.js comes with a standard API to fetch data for pages. 
We do it using an async function called getInitialProps.
With that, we can fetch data for a given page via a remote data source and pass it as props to our page. 
We can write our getInitialProps to work on both server and the client. So, Next.js can use it on both client and server.
In the code below, we are fetching Batman TV shows and passing them into our page as the 'shows' prop. */
Index.getInitialProps = async function () {
  const res = await fetch(
    "https://v2.jokeapi.dev/joke/Any?type=twopart&format=json&lang=en&amount=5&blacklistFlags=nsfw,racist,sexist,explicit"
  );
  const data = await res.json();

  return {
    items: data,
  };
};

export default Index;
