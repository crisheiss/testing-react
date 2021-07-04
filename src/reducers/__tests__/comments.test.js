import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const state = ["hello"];
  const action = { type: SAVE_COMMENT, payload: "world" };
  expect(commentsReducer(state, action)).toEqual(["hello", "world"]);
});

it("handles actions of unknown type", () => {
  const action = { type: "UNKNOWN", payload: "shouldn't be saved"};
  expect(commentsReducer([], action)).toEqual([]);
});