import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "./Header";


// eslint-disable-next-line
let container: any = null;

describe( Header , () => {
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    })
  
    it('renders the header page', () => {
        act(() => {
            render(<Header />, container);
        });
      expect(container.querySelector('h1').textContent).toBe('News of the Day');

    })
})