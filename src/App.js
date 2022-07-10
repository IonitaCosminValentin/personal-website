import { useState } from "react";
import "./Css/App.scss";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Navigation from "./Components/Navigation";

function App() {
  const [pageId, setPageId] = useState(0);
  const pages = [<Intro />, <About />];

  const changePage = (id) => {
    if (pageId <= 0) {
      return setPageId(pages.length - 1);
    }
    if (pageId + 1 >= pages.length) return setPageId(0);

    return setPageId(pageId + id);
  };

  const selectAnimation = () => {
    return "Animation" + Math.floor(Math.random() * 10);
  };

  return (
    <div className="App">
      {/* implement swipe option */}
      <div
        className="content"
        style={{ animationName: selectAnimation(), animationDuration: "1s" }}
      >
        {pages[pageId]}
      </div>

      <Navigation changePage={changePage} />
    </div>
  );
}

export default App;
