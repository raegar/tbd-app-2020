import React from 'react';

import { HeaderExample } from './Header';

export default {
  title: 'Example/Header',
  component: HeaderExample,
};

const Template = (args) => <HeaderExample {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
