/** @format */

import React from 'react';
import renderer from 'react-test-renderer';

import Typography from './Typography';

describe('Typography', () => {
  describe('Snapshot Renders ', () => {
    const component = renderer.create(<Typography />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
