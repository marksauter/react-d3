import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';

import { Header } from './index';

test('Header', assert => {
  const headerText = 'Hello!';
  const props =
    { text: headerText,
    };

  const wrapper = mount(<Header { ...props } />);
  const h1 = wrapper.find('h1');

  const actual = h1.text();
  const expected = 'Hello!';

  assert.equal(actual, expected,
    'should output the correct header text');

  assert.end();
});
