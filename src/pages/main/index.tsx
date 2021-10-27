import * as React from "react";
import { DefaultTemplate } from "../../ui";
import { Button, Card } from "../../ui";

export const MainPage: React.FC = () => (
  <DefaultTemplate>
    <Card>
      <div className="p-3">abate</div>
      <div className="flex flex-col pl-3 pr-3">
        <div className="p-1">
          <Button text="en" name="reveal" />
        </div>
        <div className="p-1">
          <Button text="ru" name="reveal" />
        </div>
      </div>
      <div>to decrease the strength</div>
      <div>уменьшить</div>
    </Card>
  </DefaultTemplate>
);
