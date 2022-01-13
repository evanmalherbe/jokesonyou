import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = (props) => (
  <Layout>
    <h1>Planets</h1>

    <ul>
      <li>
        {" "}
        <Link as={`/p/1`} href={`/post?id=1`}>
          <a>{props.items[0]}</a>
        </Link>
      </li>
      <li>
        <Link as={`/p/2`} href={`/post?id=2`}>
          <a>{props.items[1]}</a>
        </Link>
      </li>
      <li>
        {" "}
        <Link as={`/p/3`} href={`/post?id=3`}>
          <a>{props.items[2]}</a>
        </Link>
      </li>
    </ul>
  </Layout>
);

/*In practice, we usually need to fetch data from a remote data source. 
Next.js comes with a standard API to fetch data for pages. 
We do it using an async function called getInitialProps.
With that, we can fetch data for a given page via a remote data source and pass it as props to our page. 
We can write our getInitialProps to work on both server and the client. So, Next.js can use it on both client and server.
In the code below, we are fetching Batman TV shows and passing them into our page as the 'shows' prop. */
Index.getInitialProps = async function () {
  const res = await fetch("https://swapi.dev/api/planets");
  const data = await res.json();

  //console.log("Data says: " + data.results.length);

  let i;
  let array = [];

  for (i = 0; i <= data.results.length - 1; i++) {
    array.push(data.results[i].name);
  }

  //console.log("Array says: " + array);

  return {
    items: array,
  };
};

export default Index;
