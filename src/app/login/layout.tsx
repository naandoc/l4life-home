import { AuthProvider } from "@/context/CreateContext";
import { ReactProps } from "@/types/ReactProps";

export default function LoginLayout({ children }: ReactProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
