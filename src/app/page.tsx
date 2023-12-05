import { Homepage } from "@/subsets";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Homepage />
      </Suspense>
    </>
  );
}
