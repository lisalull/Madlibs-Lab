import { useContext } from "react";
import { Link } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ListStoriesRoute.css";

const ListStoriesRoute = () => {
  const { stories } = useContext(StoriesContext);
  console.log(stories);
  return (
    <div className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul>
        {stories?.map((story: Story) => (
          <li>
            <Link to={`/stories/${encodeURIComponent(story?.id!)}`}>
              Mad Lib by: {story?.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
