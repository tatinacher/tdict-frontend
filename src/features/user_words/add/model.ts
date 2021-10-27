import React from "react";

import {
  combine,
  createEffect,
  createEvent,
  createStore,
  guard,
} from "effector";
import { getToken } from "@api";
import {
  AUTH_TOKEN_NAME,
  AUTH_TOKEN_EXPIRES_DAYS,
  setCookie,
  getCookie,
} from "@lib";

export const $username = createStore("");
export const $password = createStore("");

export const handleUserChange =
  createEvent<React.ChangeEvent<HTMLInputElement>>();

export const handlePasswordChange =
  createEvent<React.ChangeEvent<HTMLInputElement>>();

export const handleSubmit = createEvent<React.FormEvent<HTMLFormElement>>();

$username.on(
  handleUserChange,
  (_, event: React.ChangeEvent<HTMLInputElement>) => event.target.value
);
$password.on(
  handlePasswordChange,
  (_, event: React.ChangeEvent<HTMLInputElement>) => event.target.value
);

export const loginUses = createEffect(getToken);

guard({
  source: combine($username, $password, (username, password) => ({
    username,
    password,
  })),
  clock: handleSubmit,
  filter: ({ username, password }: { username: string; password: string }) =>
    username !== "" && password !== "",
  target: loginUses,
});

const token = getCookie(AUTH_TOKEN_NAME);
export const $token = createStore<string>(token || "");

$token.on(loginUses.done, (_, { result }) => {
  if (result.token) {
    setCookie(AUTH_TOKEN_NAME, result.token, AUTH_TOKEN_EXPIRES_DAYS);
  }
});
