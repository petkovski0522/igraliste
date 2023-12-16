// components/Header.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import Menu from "./Menu";
import { allItems } from "./menuItem";
import Link from "next/link";

interface HeaderProps {
  items: string[]; // Assuming Menu component accepts an array of strings
}

export default function Header() {
  return <div></div>;
}
