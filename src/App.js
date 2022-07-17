import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Css/App.scss";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Navigation from "./Components/Constants/Navigation";
import Burger from "./Components/Constants/Burger";
import Resume from "./Components/Resume";

function App() {
  const [pageId, setPageId] = useState(0);
  const pages = [<Intro />, <About />, <Resume />];

  const changePage = (action) => {
    if (action === "INCREMENT") {
      if (pageId + 1 >= pages.length) return setPageId(0);
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
    <div className="App">
      <Burger />
      <div
        className="content"
        style={{ animationName: selectAnimation(), animationDuration: "1s" }}
        {...handlers}
      >
        {pages[pageId]}
      </div>

      <Navigation changePage={changePage} />
    </div>
  );
}

export default App;
