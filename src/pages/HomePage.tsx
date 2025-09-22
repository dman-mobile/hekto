import Unique from "../components/Unique";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";
import Discount from "../components/Discount";
import Blog from "../components/Blog";
import Featured from "../components/Featured";
import Trending from "../components/Trending";
import Top from "../components/Top";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <Latest />
      <Unique />
      <Trending />
      <Discount />
      <Top />
      <Newsletter />
      <Blog />
    </>
  )
}