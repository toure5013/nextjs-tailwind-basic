import Head from "next/head";
import Image from "next/image";
import THero from "../components/thero";
import TCards from "../components/tcards";

export default function Home() {

const posts =  [
  {
    title: "Rogue's Rise",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: "https://bit.ly/3BQdTqk",
  },
  {
    title: "Fool's End",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: "https://bit.ly/3CQFPvv",
  },
  {
    title: "A Greater Power",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: "https://bit.ly/3ERuyMd",
  },
  {
    title: "2099: Oasis",
    likes: Math.floor(Math.random() * (50 - 0) + 0),
    image: "https://bit.ly/3CQKSwb",
  },
];


  return (
    <div classNameName="container">
      <THero />
      <TCards/>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
      <img className="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-600 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#photography</span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#travel</span>
        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">#winter</span>
      </div>
</div>
    </div>
  );
}
