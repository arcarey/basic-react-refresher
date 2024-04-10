import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AboutPage from "./AboutPage";



let container: any = null;

describe( AboutPage , () => {
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });
  
    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    })
  
    it('renders the about page', () => {
        act(() => {
            render(<AboutPage />, container);
        });
      expect(container.querySelector('h1').textContent).toBe('About the Developer')
    })
})