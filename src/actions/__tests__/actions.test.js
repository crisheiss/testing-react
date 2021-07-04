import { saveComment } from "actions"
import { SAVE_COMMENT } from "actions/types"

describe('saveComment', () => {
  it("has the correct type", () => {
    expect(saveComment().type).toEqual(SAVE_COMMENT);
  })
  it("has the correct payload", () => {
    expect(saveComment("Hello").payload).toBe("Hello");
  })
});