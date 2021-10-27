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
  const [isEnVisible, toggleEnVisibility] = React.useReducer(
    (is) => !is,
    false
  );
  const [isRuVisible, toggleRuVisibility] = React.useReducer(
    (is) => !is,
    false
  );
  return (
    <Card>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="p-3">{word}</div>
          <div className="flex flex-col pl-3 pr-3">
            <div className="p-1">
              <Button text="en" name="reveal" onClick={toggleEnVisibility} />
            </div>
            <div className="p-1">
              <Button text="ru" name="reveal" onClick={toggleRuVisibility} />
            </div>
          </div>
        </div>
        <div>
          <div className={isEnVisible ? "" : "hidden"}>{translateEn}</div>
          <div className={isRuVisible ? "" : "hidden"}>{translateRu}</div>
        </div>
      </div>
    </Card>
  );
};
