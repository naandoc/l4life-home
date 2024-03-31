import MainTitle from "@/components/main-title/main-title";
import SectionHouseContainer from "@/components/section-house-container/section-house-container";
import "@/app/globals.css";
import Header from "@/components/header/header";
import Loading from "./loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <MainTitle />
      <SectionHouseContainer />
    </>
  );
}
