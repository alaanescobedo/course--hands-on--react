import { Reset } from "./Reset";

import { render, screen, fireEvent } from "@testing-library/react";

describe("Reset Component", () => {
  const onReset = jest.fn();

  beforeEach(() => {
    render(<Reset onReset={onReset} />);
  });

  test("should render elements with default state", () => {
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
  test("onReset handler should be called ", () => {
    fireEvent.click(screen.getByText("🙂"));
    expect(onReset).toHaveBeenCalledTimes(1);
  });
  test("should change state when onMouseDown and onMouseUp events happened", () => {
    fireEvent.mouseDown(screen.getByText("🙂"));
    expect(screen.getByText("😮")).toBeInTheDocument();

    fireEvent.mouseUp(screen.getByText("😮"));
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
  test("should change state when onMouseDown and onMousesLeave events happened", () => {
    fireEvent.mouseDown(screen.getByText("🙂"));
    expect(screen.getByText("😮")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText("😮"));
    expect(screen.getByText("🙂")).toBeInTheDocument();
  });
});
