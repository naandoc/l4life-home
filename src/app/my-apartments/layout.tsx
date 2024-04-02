import { ReactNode } from "react";
import "@/components/my-apartments/style.css";
import MyApartmentsHeader from "@/components/my-apartments-header/my-apartments-header";
import ContainerBackground from "@/components/container-background/container-background";

const MyApartmentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ContainerBackground>
      <MyApartmentsHeader />
      {children}
    </ContainerBackground>
  );
};

export default MyApartmentsLayout;
