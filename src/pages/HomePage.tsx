import Unique from "../components/Unique";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";
import Discount from "../components/Discount";
import Blog from "../components/Blog";
import Trending from "../components/Trending";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Latest />
      <Unique />
      <Trending />
      <Discount />
      <Newsletter />
      <Blog />
    </>
  )
}