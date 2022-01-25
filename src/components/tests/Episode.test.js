import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';
import { ProgressPlugin } from 'webpack';

const testEpisode = {
  id: 1,
  image: 'https://i.ibb.co/2FsfXqM/stranger-things.png',
  name: '',
  season: 1,
  number: 1,
  summary: 'young boy mysteriously disappears',
  runtime: 1
}

const noPictureEpisode = {
  id: 1,
  image: '',
  name: '',
  season: 1,
  number: 1,
  summary: 'young boy mysteriously disappears',
  runtime: 1
}


test("renders without error", () => {
  render(<Episode episode={testEpisode}/>);
});



test("renders the summary text passed as prop", ()=>{
  render(<Episode episode={testEpisode}  />);

  const summaryText = screen.queryByText(/young boy mysteriously disappears/i)
  
  expect(summaryText).toBeInTheDocument();
  expect(summaryText).toBeTruthy();
  expect(summaryText).toBeVisible();
});



test("renders default image when image is not defined", ()=>{
  render(<Episode episode={noPictureEpisode}/>);

  const defaultImage = screen.queryByAltText('https://i.ibb.co/2FsfXqM/stranger-things.png')

  expect(defaultImage).toBeVisible();
});
