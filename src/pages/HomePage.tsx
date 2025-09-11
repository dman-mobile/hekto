import Unique from "../components/Unique";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";
import Discount from "../components/Discount";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Unique />
      <Discount />
      <Latest />
      <Newsletter />
    </>
  )
}