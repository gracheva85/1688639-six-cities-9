import {render, screen} from '@testing-library/react';

import FavoritesEmpty from './favorites-empty';

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(<FavoritesEmpty />);

    expect(screen.getByText('Nothing yet saved.')).toBeInTheDocument();
    const descriptionElement = screen.getByText('Save properties to narrow down search or plan your future trips.');
    expect(descriptionElement).toBeInTheDocument();
  });
});
