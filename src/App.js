import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Css/App.scss";
import "./Css/Animation.scss";
import "./Css/_tablet.scss";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Navigation from "./Components/Constants/Navigation";
import Burger from "./Components/Constants/Burger";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [pageId, setPageId] = useState(0);
  const pages = [<Intro />, <About />, <Resume />, <Projects />, <Contact />];
  let transitionElement = document.querySelector(".transition-element");

  const randomAnimation = () => {
    return "transition" + Math.floor(Math.random() * 10);
  };

  useEffect(() => {
    transitionElement.classList.add(randomAnimation());
    transitionElement.classList.add("active");
    transitionElement.classList.remove("active");
  }, [transitionElement]);

  const changePage = (id) => {
    transitionElement.classList.add("active");

    setTimeout(() => {
      transitionElement.classList.remove("active");

      if (id >= 1) {
        if (pageId >= pages.length - 1) return setPageId(0);
        return setPageId(pageId + 1);
      }
      if (pageId <= 0) {
        return setPageId(pages.length - 1);
      }

      return setPageId(pageId + id);
    }, 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changePage(1),
    onSwipedRight: () => changePage(-1),
  });

  return (
    <div className="App">
      <Burger
        openBurger={() => {
          let burger = document.getElementsByClassName("burger")[0];
          if (burger.classList.contains("open"))
            return burger.classList.remove("open");
          burger.classList.add("open");
        }}
        setPage={(id) => {
          let burger = document.getElementsByClassName("burger")[0];
          setPageId(id);
          burger.classList.remove("open");
        }}
      />
      <div className="content" {...handlers}>
        {pages[pageId]}
      </div>

      <Navigation changePage={changePage} />
    </div>
  );
}

export default App;
