import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./CreateStoryRoute.css";

const CreateStoryRoute = () => {
  const { addStory } = useContext(StoriesContext);
  const history = useHistory();
  const [author, setAuthor] = useState("");
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [word3, setWord3] = useState("");
  const [word4, setWord4] = useState("");
  const [word5, setWord5] = useState("");
  const [word6, setWord6] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newStory: Story = {
      author,
      word1,
      word2,
      word3,
      word4,
      word5,
      word6,
    };
    addStory(newStory);
    history.push("/stories");
  };

  return (
    <form className="CreateStoryRoute" onSubmit={submitHandler}>
      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="word1">Place</label>
      <input
        type="text"
        name="word1"
        id="word1"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
      />
      <label htmlFor="word2">Person</label>
      <input
        type="text"
        name="word2"
        id="word2"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <label htmlFor="word3">Silly Word</label>
      <input
        type="text"
        name="word3"
        id="word3"
        value={word3}
        onChange={(e) => setWord3(e.target.value)}
      />
      <label htmlFor="word4">Occupation</label>
      <input
        type="text"
        name="word4"
        id="word4"
        value={word4}
        onChange={(e) => setWord4(e.target.value)}
      />
      <label htmlFor="word5">Number</label>
      <input
        type="text"
        name="word5"
        id="word5"
        value={word5}
        onChange={(e) => setWord5(e.target.value)}
      />
      <label htmlFor="word6">Brand Tagline</label>
      <input
        type="text"
        name="word6"
        id="word6"
        value={word6}
        onChange={(e) => setWord6(e.target.value)}
      />
      <button>Save</button>
    </form>
  );
};

export default CreateStoryRoute;
