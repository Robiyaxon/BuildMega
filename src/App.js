import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/TopHeader/TopHeader";
import Header from "./components/Header/Header";
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Footer from "./components/Footer/Footer";
import { BackToTop } from "./BackToTop.js";
import CircularProgress from "@material-ui/core/CircularProgress";
const MainProject = React.lazy(() => import("./pages/Project/MainProject"));
const SingleNews = React.lazy(() => import("./pages/news/SingleNews"));
const SingleProject = React.lazy(() => import("./pages/Project/SingleProject"));
const News = React.lazy(() => import("./pages/news/News"));
const Contact = React.lazy(() => import("./pages/contact/Contact"));
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const App = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  const map = [
    { id: 1, url: "news", kompannent: <News /> },
    { id: 2, url: "singilur", kompannent: <SingleNews /> },
    { id: 3, url: "contact", kompannent: <Contact /> },
    { id: 4, url: "project", kompannent: <MainProject /> },
    { id: 4, url: "project/singilurproject", kompannent: <SingleProject /> },
  ];
  const mapRoute = map.map((a) => (
    <Route
      key={a.id}
      path={a.url}
      element={
        <Suspense
          fallback={
            <>
              <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
              </Backdrop>{" "}
            </>
          }
        >
          {" "}
          {a.kompannent}
        </Suspense>
      }
    />
  ));
  return (
    <div className="App">
      
      {isLoading ? (
        <>
          <Backdrop className={classes.backdrop} open>
            <CircularProgress color="inherit" />
          </Backdrop>{" "}
        </>
      ) : (
        <>
          <BackToTop />
          <TopHeader />
          <BurgerMenu />
          <Header />
          <Routes>
            {mapRoute}
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};
export default App;
