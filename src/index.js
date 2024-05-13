import { PataponImagenes } from "./PataponImagenes";
import React from "react";
import ReactDom from "react-dom/client";
import { HeaderTexto } from "./PataponHeader";
import 'animate.css';
import Product, { NavBar } from "./Product";
import styles from "./estilos.css";
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeaderTexto />
    <PataponImagenes />
  </>
);