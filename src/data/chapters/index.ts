import chapter1 from "./chapter1";
import chapter2 from "./chapter2";
import { Chapter } from "../types";

const chapters: Record<number, Chapter> = {
  1: chapter1,
  2: chapter2,
};

export default chapters;
