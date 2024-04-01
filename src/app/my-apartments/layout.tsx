import { ReactNode } from "react";
import "@/components/my-apartments/style.css";
import MyApartmentsHeader from "@/components/my-apartments-header/my-apartments-header";

const MyApartmentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MyApartmentsHeader />
      {children}
    </>
  );
};

export default MyApartmentsLayout;
