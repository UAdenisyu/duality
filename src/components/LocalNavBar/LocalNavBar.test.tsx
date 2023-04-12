import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LocalNavBar from "./index";

describe("LocalNavBar", () => {
  const buttonTitles = ["Button 1", "Button 2", "Button 3"];

  it("buttons renders correctly", () => {
    const { getByText } = render(<LocalNavBar buttonTitles={buttonTitles} />);
    buttonTitles.forEach((title) => {
      const button = getByText(title);
      expect(button).toBeDefined();
    });
  });
});
