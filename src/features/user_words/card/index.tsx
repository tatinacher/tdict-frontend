import * as React from "react";
import { Button, Card, Text } from "@ui";

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
      <div className="flex flex-col" style={{ width: 200 }}>
        <div className="flex flex-col justify-between">
          <div className="pb-3">
            <Text size="m">{word}</Text>
          </div>
          <div className="flex pr-3 pb-3">
            <div className="pr-2">
              <Button text="en" name="reveal" onClick={toggleEnVisibility} />
            </div>
            <div className="">
              <Button text="ru" name="reveal" onClick={toggleRuVisibility} />
            </div>
          </div>
        </div>
        <div>
          <div className={`${isEnVisible ? "" : "hidden"} transition pt-3`}>
            {translateEn}
          </div>
          <div className={`${isRuVisible ? "" : "hidden"} transition pt-3`}>
            {translateRu}
          </div>
        </div>
      </div>
    </Card>
  );
};
