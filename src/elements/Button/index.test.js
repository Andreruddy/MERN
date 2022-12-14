import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router } from "react-router-dom";


// do test if isDisabled is present
test("Should not allowed click button if isDisabled is present", () => {
  // get container from func
  // representasikan penggunaannya
  const { container } = render(<Button isDisabled></Button>);
  // console.log(container, `container`);
  // expentation, check container.
  // check component have tag span and classname disabled, and make sure the tag exist in the document.

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
// mengekspresikan hasil yang diharapkan, jika sesuai maka test passed

test("Should render/loading spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  /* '/loading/' is regex/regularExpression, means i case-insensitive ("Ruddy" is equal to "ruddy") */
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <a> tag ", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component ", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
