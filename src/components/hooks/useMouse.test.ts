import { act, renderHook } from "@testing-library/react-hooks";
import { useMouse } from "./useMouse";

describe("useMouse Hoks", () => {
  test("should toggle state after onMouseDown/onMouseUp calls", () => {
    const { result } = renderHook(useMouse);

    const [mouseDown, onMouseDown, onMouseUp] = result.current;

    expect(mouseDown).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true);

    act(onMouseUp);
    expect(result.current[0]).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true);
  });
});
