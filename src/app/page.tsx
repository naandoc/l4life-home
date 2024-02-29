import MainTitle from "@/components/main-title/main-title";
import SectionHouseContainer from "@/components/section-house-container/section-house-container";
import "@/app/globals.css";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <MainTitle />
      <SectionHouseContainer />
    </>
  );
}
