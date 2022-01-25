import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
  render(<Episode episode={{}}/>);
});

test("renders the summary text passed as prop", ()=>{
  render(<Episode episode={{id: 1}}/>);

  const summaryText = screen.queryByText(/young boy mysteriously disappears/i)
  
  expect(summaryText).toBeInTheDocument();
  expect(summaryText).toBeTruthy();
  expect(summaryText).toBeVisible();
});

test("renders default image when image is not defined", ()=>{});
