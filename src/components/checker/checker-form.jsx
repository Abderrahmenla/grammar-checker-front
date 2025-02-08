"use client";

import { useState, useEffect } from "react";
import PreviewBox from "@/components/checker/preview-box";
import Card from "@/components/ui/card";
import TextArea from "@/components/ui/text-area";
import { useDebounce } from "@/hooks/use-debounce";

import { checkGrammarMistakes } from "@/services/checker";

const CheckerForm = () => {
  const [text, setText] = useState("");
  const [correctedText, setCorrectedText] = useState(null);
  const [isChecking, setIsChecking] = useState(false);
  const debouncedText = useDebounce(text, 1000);

  useEffect(() => {
    const checkGrammar = async () => {
      if (!debouncedText.trim()) {
        setCorrectedText(null);
        return;
      }

      setIsChecking(true);
      try {
        const response = await checkGrammarMistakes({ text: debouncedText });
        setCorrectedText({
          original: debouncedText,
          corrected: response.data.corrected,
        });
      } catch (error) {
        console.error("Grammar check failed:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkGrammar();
  }, [debouncedText]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-4">
        <TextArea
          label="Enter your text"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={handleTextChange}
          rows={8}
          className="resize-none"
        />
      </Card>
      <PreviewBox text={correctedText} isLoading={isChecking} />
    </div>
  );
};

export default CheckerForm;
