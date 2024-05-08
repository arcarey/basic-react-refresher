import { render, unmountComponentAtNode } from "react-dom";
import StoryFilters from "./Story-Filters";
import { act } from "react-dom/test-utils";
import { SetStateAction } from "react";
import { userEvent } from '@testing-library/user-event'


// eslint-disable-next-line
let container: any = null;
const mockActiveGenres = ['All']
const mockGenres = ['us', 'health', 'business', 'nyregion', 'arts', 'opinion']
// eslint-disable-next-line
function mockSetActiveGenre (value: SetStateAction<string[]>): any {
    return value
}

describe( StoryFilters , () => {
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    })
  

    it('renders the story filters with the All button active', () => {
        act(() => {
            render(<StoryFilters genres={mockGenres} activeGenres={['All']} setActiveGenres={mockSetActiveGenre} />, container);
        });
      expect(container.querySelector('.selected-button').textContent).toBe('All')
    })

    it('Sets active genre to All when clicked', async () => {
        const user = userEvent.setup()
        let testResult = ['']
        // eslint-disable-next-line
        const testSetActiveGenre = (value: any) => testResult = value ;
        render(<StoryFilters genres={mockGenres} activeGenres={mockActiveGenres} setActiveGenres={testSetActiveGenre} />, container);
        await user.click(container.querySelectorAll('button')[0])
        await expect(testResult[0]).toBe('All');
    })
  
    it('Sets active genre to us when clicked', async () => {
        const user = userEvent.setup()
        let testResult = ['']
        // eslint-disable-next-line
        const testSetActiveGenre = (value: any) => testResult = value ;
        render(<StoryFilters genres={mockGenres} activeGenres={['arts']} setActiveGenres={testSetActiveGenre} />, container);
        await user.click(container.querySelectorAll('button')[1])
        await expect(testResult[0]).toBe('us');
    })


  })

