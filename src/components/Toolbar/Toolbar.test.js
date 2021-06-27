import { render, screen } from '@testing-library/react';
import Toolbar from "./Toolbar";

test('home link is visible', () => {
    render(<Toolbar />);
    const linkElement = screen.getByText(/GIF searcher/i);
    expect(linkElement).toBeInTheDocument();
});