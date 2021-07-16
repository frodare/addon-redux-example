import React from 'react'
import MainSection from './MainSection'
import { PARAM_REDUX_MERGE_STATE } from 'addon-redux'

export default {
  title: 'MainSection',
  component: MainSection,
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"foo": {"bar": "baz"}}'
  }
};

const Template = (args) => <MainSection {...args} />;

export const All = Template.bind({});
All.args = {};