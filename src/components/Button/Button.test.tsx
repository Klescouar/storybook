import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Large } from "../../stories/Button.stories";
import { ButtonProps } from "./Button";

it("renders the button in the primary state", () => {
  render(<Large {...(Large.args as ButtonProps)} />);
  expect(screen.getByRole("button")).toHaveTextContent("Button");
});
