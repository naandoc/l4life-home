import MainTitle from "@/components/main-title/main-title";
import SectionHouseContainer from "@/components/section-house-container/section-house-container";
import "@/app/globals.css";
import { AuthProvider } from "@/context/CreateContext";
import Header from "@/components/header/header";
import LoginForm from "@/components/login-form/login-form";

export default function Home() {
  return (
    <AuthProvider>
      <Header />
      <MainTitle />
      <SectionHouseContainer />
    </AuthProvider>
  );
}
