import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <>
    <div>
      <Link to="/users">/users - User list</Link>
    </div>
    <div>
      <Link to="/posts">/posts - Post list</Link>
    </div>
  </>
);

export default Home;
