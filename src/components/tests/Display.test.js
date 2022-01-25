import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';
import Show from '../Show';

import mockFetchShow from './../../api/fetchShow';
jest.mock('./../../api/fetchShow');

const testShow = {
  name: '',
  summary: '',
  seasons: [{
    id: 1,
    name: '',
    episodes: []
  }]
}


test('renders without errors with no props', ()=>{
  render(<Display/>);
});

test('renders Show component when the button is clicked ', async ()=>{
  mockFetchShow.mockResolvedValueOnce(testShow);
  render(<Display/>);
  const button = screen.getByRole('button');
  userEvent.click(button);

  const show = await screen.findByTestId('show-container');
  expect(show).toBeInTheDocument();
});

test('renders season options matching fetch return when button is clicked', async()=>{
  mockFetchShow.mockResolvedValueOnce(testShow);

  render(<Display/>)
  const button = screen.getByRole('button')
  userEvent.click(button);

  await waitFor(()=>{
    const seasonOptions = screen.queryAllByTestId('season-option');
    expect(seasonOptions).toHaveLength(1);
  })
})


test('displayFunction is called when the fetch button is pressed', async ()=>{
  mockFetchShow.mockResolvedValueOnce(testShow);
  const displayFunc = jest.fn();

  render(<Display displayFunc={displayFunc}/>)
  const button = screen.getByRole('button')
  userEvent.click(button);

  await waitFor(()=>{
    expect(displayFunc).toHaveBeenCalled();
  })
});
