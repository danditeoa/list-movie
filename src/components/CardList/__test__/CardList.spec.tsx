import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { mockList } from './mocks';

describe('<CardList />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CardList list={mockList} />);
    expect(container).toMatchSnapshot();
  });

  it('shows "Lista vazia!" when is empty list', () => {
    render(<CardList list={[]} />);
    expect(screen.getByText('Lista vazia!')).toBeInTheDocument();
  });
});
