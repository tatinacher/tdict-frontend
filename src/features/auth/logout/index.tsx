import * as React from "react";

import { Button, Title } from "@ui";
import { eraseCookie, AUTH_TOKEN_NAME } from "@lib";

export const LogoutForm: React.FC = () => {
  const onSubmit = React.useCallback((event) => {
    event.preventDefault();
    eraseCookie(AUTH_TOKEN_NAME);
  }, []);
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center h-screen"
    >
      <Title>Are you sure?</Title>
      <Button type="submit" name="logout" text="Logout" />
    </form>
  );
};
