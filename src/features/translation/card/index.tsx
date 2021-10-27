import * as React from "react";
import { Button, Card } from "@ui";

interface CardProps {
  word: string;
  translateEn?: string;
  translateRu?: string;
}

export const TranslationCard: React.FC<CardProps> = ({
  word,
  translateEn,
  translateRu,
}) => {
  return (
    <Card>
      <div className="p-3">{word}</div>
      <div className="flex flex-col pl-3 pr-3">
        <div className="p-1">
          <Button text="en" name="reveal" />
        </div>
        <div className="p-1">
          <Button text="ru" name="reveal" />
        </div>
      </div>
      <div>{translateEn}</div>
      <div>{translateRu}</div>
    </Card>
  );
};
