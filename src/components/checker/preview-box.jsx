"use client";

import Card from "@/components/ui/card";

const PreviewBox = ({ text, isLoading }) => {
  const renderPreviewText = () => {
    if (!text?.original || !text?.corrected) return null;

    const originalWords = text.original.split(/\s+/);
    const correctedWords = text.corrected.split(/\s+/);

    return correctedWords.map((word, index) => {
      const isHighlighted = word !== originalWords[index];

      return (
        <span key={index}>
          {index > 0 && " "}
          <span className={isHighlighted ? "text-success" : ""}>{word}</span>
        </span>
      );
    });
  };

  return (
    <Card className="p-4">
      <div className="mb-2 text-sm font-medium text-foreground">
        Preview {isLoading && "(Checking For Grammar Errors...)"}
      </div>
      <div className="min-h-[200px] p-4 rounded-md bg-muted/50">
        {text ? (
          <p className="mb-4">{renderPreviewText()}</p>
        ) : (
          <p className="text-muted-foreground">
            Your text preview will appear here...
          </p>
        )}
      </div>
    </Card>
  );
};

export default PreviewBox;
