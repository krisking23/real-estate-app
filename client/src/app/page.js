import Image from "next/image";
import { Hero } from "./components/Hero";
import { ImageSlider } from "./components/ImageSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageSlider />
    </main>
  );
}
