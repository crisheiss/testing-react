import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// This is good to avoid repeating common setups
let wrapped
beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    // Find returns an array with each instance found
    expect(wrapped.find(CommentBox).length).toEqual(1)
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
});