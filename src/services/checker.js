import axios from "@/utils/axios";

export const checkGrammarMistakes = async ({ text }) => {
  const response = await axios.post("/checker/check", {
    text,
  });
  return response.data;
};
