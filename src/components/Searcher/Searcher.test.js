import { render, screen } from '@testing-library/react';
import Searcher from "./Searcher";

test('searcher button is visible', () => {
    render(<Searcher />);
    const linkElement = screen.getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});

test('searcher form is visible', () => {
    render(<Searcher />);
    const linkElement = screen.getByPlaceholderText(/Search GIF. Example: dog/i);
    expect(linkElement).toBeInTheDocument();
});