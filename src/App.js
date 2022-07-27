import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Css/App.scss";
import "./Css/Animation.scss";
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

  const changePage = (action) => {
    transitionElement.classList.add("active");

    setTimeout(() => {
      transitionElement.classList.remove("active");

      if (action === "INCREMENT") {
        if (pageId >= pages.length - 1) return setPageId(0);
        return setPageId(pageId + 1);
      }
      if (pageId <= 0) {
        return setPageId(pages.length - 1);
      }

      return setPageId(pageId - 1);
    }, 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changePage("INCREMENT"),
    onSwipedRight: () => changePage("DECREMENT"),
  });
  return (
    <div className="App">
      <Burger />
      <div className="content" {...handlers}>
        {pages[pageId]}
      </div>

      <Navigation changePage={changePage} />
    </div>
  );
}

export default App;
