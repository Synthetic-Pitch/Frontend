import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      ERROR PAGE NOT FOUND
      <Link to={"/home"}>
        <h1>HOME</h1>
      </Link>
    </div>
  );
};

export default PageNotFound;