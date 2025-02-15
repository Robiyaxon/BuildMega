import React from "react";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import "./Projects.scss";
import { use } from "i18next";

function Projects() {
  const {t} = useTranslation();
  const map = [
    {
      id: 1,
      title1:t("homeProjects.title1"),
      title2: t("homeProjects.subTitle1"),
      url: "project/singilurproject",
    },
    {
      id: 2,
      title1:t("homeProjects.title2"),
      title2: t("homeProjects.subTitle2"),
      url: "project/singilurproject",
    },
    {
      id: 3,
      title1:t("homeProjects.title3"),
      title2: t("homeProjects.subTitle3"),
      url: "project/singilurproject",
    },
    {
      id: 4,
      title1:t("homeProjects.title4"),
      title2: t("homeProjects.subTitle4"),
      url: "project/singilurproject",
    },
    {
      id: 5,
      title1: "250-sonli bog'cha",
      title2: `Bog'cha binosi to'liq bitgan holda foydalanishga topshirildi!`,
      url: "project/singilurproject",
    },
    {
      id: 6,
      title1: "TRASTBANK Samarqand filiali",
      title2: `Obyetkt qurilish ishlari sifatli tarzda bank xavfsizlik tomonlarini o'ylagan holda puxta qilib qurilgan !`,
      url: "project/singilurproject",
    },
    {
      id: 7,
      title1: "ALUTEX",
      title2: `ALUTEX firmasidan biz sifatli oynak va eshik romlarini harida qilamiz va binolari sifatli eshik oyna bilan jihozlaymiz !`,
      url: "project/singilurproject",
    },
    {
      id: 8,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project/singilurproject",
    },
  ];
  const map2 = map.map((a) => (
    <div className="each_part" key={a.id}>
      <Link to="">
        <div className="in_wrapper">
          <div className="main_text">
            <h3>{a.title1}</h3>
          </div>
          <div className="hiidden_text">
            <p>
             {a.title2}
            </p>
            <Link to={a.url}>{t("homeProjects.seeProject")}</Link>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="projects" id="projects">
      <div className="wrapper">
      {map2}
      </div>
    </div>
  );
}

export default Projects;
