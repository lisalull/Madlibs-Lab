import { useContext } from "react";
import { useParams } from "react-router";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

interface RouteParams {
  id: string;
}

const ViewStoryRoute = () => {
  const id = useParams<RouteParams>().id;
  const { stories } = useContext(StoriesContext);
  const index = stories.findIndex((story) => story.id === parseInt(id));
  //   const story = stories.find((story) => story.id === parseInt(id));

  return (
    <div className="ViewStoryRoute">
      <h2>Mad Lib by: {stories[index].author}</h2>
      <p>
        On my way to {stories[index].word1}, I met {stories[index].word2}.
      </p>
      <p>
        They were in quite a hurry because they were meeting{" "}
        {stories[index].word3}, the {stories[index].word4} in{" "}
        {stories[index].word5} minutes!
      </p>
      <p>So we said, "{stories[index].word6}" and parted ways.</p>
    </div>
  );
};

export default ViewStoryRoute;
