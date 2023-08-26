import Head from "next/head";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Response from "@/Response";
import SearchResults from "@/components/SearchResults";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`${router.query.term}`} - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;

  const API_KEY = process.env.API_KEY;
  const CONTEXT_KEY = process.env.CONTEXT_KEY;

  const startIndex = context.query.start || "0";

  const urlApi = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`;

  const data = useDummyData
    ? Response
    : await fetch(urlApi).then((response) => response.json());

  // After the server has rendered... Pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}
