// Import React
import React from "react";
// Incorporate the React Testing Library
import { render, cleanup } from "@testing-library/react";
// Import the jest-dom Package
import "@testing-library/jest-dom/extend-expect";
// Import the About Component
import About from "..";

// Configure the Testing Environment
//
// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

describe("About component", () => {
  //renders About test
  //
  // First Test

  // Second Test
});
