import { lazy, Suspense } from "react";

import Loading from "../features/Loading/Loading";
import SearchBar from "../features/SearchBar/SearchBar";

const LazyCocktails = lazy(() => import("../features/Cocktails/Cocktails"));

function Home(): JSX.Element {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <LazyCocktails />
      </Suspense>
    </>
  );
}

export default Home;
