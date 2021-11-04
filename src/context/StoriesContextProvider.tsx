import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 5,
      author: "Grant",
      word1: "the Eiffel Tower",
      word2: "General Tso",
      word3: "chewy",
      word4: "lawyer",
      word5: "42",
      word6: "I'm lovin' it!",
    },
    {
      id: 6,
      author: "Lady Witherell",
      word1: "Disney World",
      word2: "Oscar the Grouch",
      word3: "kerfuffle",
      word4: "airline pilot",
      word5: "one million",
      word6: "When you're here, you're family.",
    },
    {
      id: 7,
      author: "Damien",
      word1: "Detroit",
      word2: "the mayor",
      word3: "pfffft",
      word4: "orthodontist",
      word5: "124,600",
      word6: "Come fly the friendly skies.",
    },
  ]);
  const [nextId, setNextId] = useState<number>(8);
  const addStory = (story: Story): void => {
    story.id = nextId;
    setNextId(nextId + 1);
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
