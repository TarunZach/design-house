import Image from "next/image";
import Header from "./components/header";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={montserrat.className}>
      <Header />
    </main>
  );
}
