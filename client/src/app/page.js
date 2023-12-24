import Image from "next/image";
import { Hero } from "./components/Hero";
import { ImageSlider } from "./components/ImageSlider";
import Link from "next/link";
import { Listings } from "./components/Listings";

async function getData() {
  const res = await fetch("http://localhost:8080/listing");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Hero />
      <ImageSlider />
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        <div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent offers
            </h2>
            <Link href="/search">
              <p className="text-sm text-blue-800 hover:underline">
                Show more offers
              </p>
            </Link>
          </div>
          <Listings data={data} />
        </div>

        <div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent places for rent
            </h2>
            <Link href="/search">
              <p className="text-sm text-blue-800 hover:underline">
                Show more places for rent
              </p>
            </Link>
          </div>
          <Listings data={data} />
        </div>

        <div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent places for sale
            </h2>
            <Link href="/search">
              <p className="text-sm text-blue-800 hover:underline">
                Show more places for sale
              </p>
            </Link>
          </div>
          <Listings data={data} />
        </div>
      </div>
    </main>
  );
}
