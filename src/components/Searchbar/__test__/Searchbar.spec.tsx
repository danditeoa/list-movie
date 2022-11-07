import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ReactRedux from 'react-redux';
import store from '../../../redux/store';
import { mockList } from '../../CardList/__test__/mocks';
import Searchbar from '../Searchbar';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(() => Promise.resolve([mockList[0]])),
}));

// jest.mock('../../store/foo/actions', () => ({
//   myActionCreator: jest.fn(
//     () => () => Promise.resolve([{ id: 1, username: 'foo' }])
//   ),
// }));

const getSearchBar = () => (
  <ReactRedux.Provider store={store}>
    <Searchbar />
  </ReactRedux.Provider>
);

describe('<Searchbar />', () => {
  const useDispatchMock = jest.spyOn(ReactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  it('matches snapshot', () => {
    const { container } = render(getSearchBar());
    expect(container).toMatchSnapshot();
  });

  it('returns film search', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    expect(dummyDispatch).not.toHaveBeenCalled();

    render(getSearchBar());

    userEvent.type(screen.getByRole('textbox'), 'Hello,{enter}World!');

    fireEvent.click(screen.getByText('Search'));

    expect(dummyDispatch).toHaveBeenCalledWith({
      payload: { results: {} },
      type: 'search/request',
    });
  });
});
