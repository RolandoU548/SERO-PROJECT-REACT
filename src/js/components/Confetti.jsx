import Confetti from "react-confetti";
import "../styles/Home.css";
import useWindowSize from "react-use/lib/useWindowSize";
import "animate.css";

export const Confetti = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height}/>
    </div>
  );
}

import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import "../styles/Home.css";
import useWindowSize from "react-use/lib/useWindowSize";
import "animate.css";

function Home() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <div className="globe"></div>
      <br />
      <Confetti width={width} height={height} recycle={false} />
      <h2 className="text-center animate__animated animate__tada">
        Welcome to the Word Counter{" "}
        <Link to="/easter" className="text-decoration-none">
          <span role="img" aria-label="tada">
            🎉
          </span>
        </Link>
        ,{" "}
        <Link to="/app">
          <span className="text-decoration-underline span">Let's go </span>{" "}
        </Link>
      </h2>
    </div>
  );
}
export default Home;
