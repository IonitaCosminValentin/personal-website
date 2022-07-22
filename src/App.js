import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Css/App.scss";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Navigation from "./Components/Constants/Navigation";
import Burger from "./Components/Constants/Burger";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";

function App() {
  const [pageId, setPageId] = useState(2);
  const pages = [<Intro />, <About />, <Resume />, <Projects />];

  const changePage = (action) => {
    if (action === "INCREMENT") {
      if (pageId >= pages.length - 1) return setPageId(0);
      return setPageId(pageId + 1);
    }
    if (pageId <= 0) {
      return setPageId(pages.length - 1);
    }

    return setPageId(pageId - 1);
  };

  const selectAnimation = () => {
    return "Animation" + Math.floor(Math.random() * 10);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changePage("INCREMENT"),
    onSwipedRight: () => changePage("DECREMENT"),
  });

  return (
    <div
      className="App"
      style={{ animationName: selectAnimation(), animationDuration: "1s" }}
    >
      <Burger />
      <div className="content" {...handlers}>
        {pages[pageId]}
      </div>

      <Navigation changePage={changePage} />
    </div>
  );
}

export default App;
