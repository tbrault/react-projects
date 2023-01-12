import { Suspense } from "react";
import Cocktails from "../features/Cocktails/Cocktails";
import Loading from "../features/Loading/Loading";
import SearchBar from "../features/SearchBar/SearchBar";

function Home(): JSX.Element {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <Cocktails />
      </Suspense>
    </>
  );
}

export default Home;
