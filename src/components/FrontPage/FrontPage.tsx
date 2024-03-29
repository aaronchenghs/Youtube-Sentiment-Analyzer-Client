import InputCard from "@/components/InputCard/InputCard";
import styles from "./FrontPage.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "@/app/store";
import { useEffect, useState } from "react";
import ResultsComponent from "../ResultsComponent/ResultsComponent";

export default function FrontPage() {
  const $title = useSelector((state: AppState) => state.user.video.videoTitle);

  return (
    <div className={styles.home}>
      <InputCard />
      {$title !== "" && <ResultsComponent />}
    </div>
  );
}
