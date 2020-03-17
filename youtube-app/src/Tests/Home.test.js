import React from "react";
import { render, getByText } from "@testing-library/react";
import Home from "../Components/Home";
import { MemoryRouter } from "react-router-dom";
import { list as videoList } from "../mockTestData/videoList";

describe("<Home />", () => {
  test("Home is rendered in the document", () => {
    const { baseElement, getByPlaceholderText, container, getByText } = render(
      <MemoryRouter>
        <Home videoList={[]} />,
      </MemoryRouter>,
    );

    expect(baseElement).toBeInstanceOf(HTMLBodyElement);
  });

  it("Renders input & button", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Home videoList={[]} />
      </MemoryRouter>,
    );

    // const button = getByText(/Hello/i);
    const input = getByPlaceholderText("Search...");

    // expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("Renders video list", () => {
    const { getAllByText } = render(
      <MemoryRouter>
        <Home videoList={videoList} />
      </MemoryRouter>,
    );
    const videoTitle = getAllByText(/Drake/i);

    expect(videoTitle.length).toBeGreaterThan(0);
  });
});
