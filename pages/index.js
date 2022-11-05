import axios from "axios";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { HiClipboardCopy } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { FaGithub } from "react-icons/fa";

const url = "https://excuser.herokuapp.com/v1/excuse/office/";
const twitterUrl = "https://twitter.com/twevente_wolf";
const githubUrl = "https://github.com/leventefrks";

const Home = () => {
  const [excuse, setExcuse] = useState();

  const copyToClipboard = () => navigator.clipboard.writeText(excuse);

  const fetchExcuse = async () => {
    const response = await axios(url);
    setExcuse(response.data[0].excuse);
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center sm:px-6 w-full min-h-screen bg-yellow-200 overscroll-y-none font-sans">
      <Head>
        <title>Excuse me Boss!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="absolute top-0 inset-x-1/2 mt-4 font-bold tracking-tight text-2xl text-indigo-800">
        <strong>Idont</strong>
        <span className="font-medium">FeelLike</span>
        <strong>working</strong>
      </h1>
      <div className="text-center flex flex-col justify-center items-center">
        <p className="h-10 z-10 relative mb-16 mx-6 leading-none font-bold text-xl md:text-3xl text-indigo-800">
          {excuse}
        </p>
        <p
          style={{ opacity: "0.15", fontSize: "100px" }}
          className="z-0 absolute max-w-md leading-none font-black text-red-300 tracking-tight"
        >
          I don't want to work
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center">
          <button className="flex items-center gap-1" onClick={copyToClipboard}>
            <HiClipboardCopy className="h-6 w-6 text-indigo-800 cursor-pointer" />
            <span className="text-indigo-800 text-sm">Copy to clipboard</span>
          </button>
          <button
            type="button"
            onClick={fetchExcuse}
            className="items-start text-sm py-1 px-4 uppercase bg-indigo-800 text-white rounded-md hover:bg-indigo-900"
          >
            show me another excuse
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 mb-4 left-0 ml-4 flex gap-6 text-gray-700">
        <a href={twitterUrl} rel="noopener noreferrer" target="_blank">
          <ImTwitter className="h-6 w-6" />
        </a>
        <a href={githubUrl} rel="noopener noreferrer" target="_blank">
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default Home;
