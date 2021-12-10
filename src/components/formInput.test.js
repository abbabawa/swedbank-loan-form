import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FormInput from "./FormInput";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("returns an input based on type prop", () => {
    act(() => {
        render(<FormInput type="text" />, container)
    });
    expect(container.children[0].type).toBe("text");
    
    act(() => {
        render(<FormInput type="" />, container)
    });
    expect(container.children[0].type).toBe("text");
})