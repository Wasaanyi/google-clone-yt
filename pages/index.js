import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Avator from "../components/Avator";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
import code from "../public/code1.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Google</title>
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left-section */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* right-section */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          {/* Avator */}
          <Avator url={code} />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={100}
          height={300}
          alt="Google Logo"
          priority="false"
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
      border border-gray-200 rounded-full px-5 py-3 items-center sm:max-w-xl
      lg:max-w-2xl
      "
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="flex flex-col w-1/2 space-y-2 justify-center 
      mt-8 sm:space-y-0 sm:flex-row sm:space-x-4"
        >
          <button className="btn" onClick={search}>
            Google Search
          </button>

          <button className="btn" onClick={search}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
