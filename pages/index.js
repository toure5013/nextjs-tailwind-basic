import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ttable from "../components/ttable";
import THero from "../components/thero";
import TDescriptionList from "../components/tdescriptionlist";

export default function Home() {
  return (
    <div className="container">
      <THero />

      <br />
      <br />
      <br />
      <br />
      <div className="d-none d-sm-block">
        <h1>Table </h1>
        <br />
        <Ttable />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="d-none d-sm-block">
        <h1>Description list</h1>
        <br />
        <TDescriptionList />
      </div>
    </div>
  );
}
