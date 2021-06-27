import { render, screen } from '@testing-library/react';
import Loader from "./Loader";

test('loader is visible', () => {
    render(<Loader />);
    const linkElement = screen.getByText(/Loading/i);
    expect(linkElement).toBeInTheDocument();
});