import { render, screen } from '@testing-library/react';
import { mockList } from '../../CardList/__test__/mocks';
import CardMovie from '../CardMovie';

const movieMock = mockList[0];
describe('<CardMovie />', () => {
  it('matches snapshot', () => {
    const { container } = render(<CardMovie movie={movieMock} />);
    expect(container).toMatchSnapshot();
  });

  it('renders title movie', () => {
    render(<CardMovie movie={movieMock} />);
    expect(screen.getByText('Terrifier 2')).toBeInTheDocument();
  });
});
