import React from 'react'
import MainSection from './MainSection'
import { PARAM_MERGE_STATE } from 'addon-redux'

export default {
  title: 'MainSection',
  component: MainSection,
  parameters: {
    [PARAM_MERGE_STATE]: '{"foo2": {"bar": "baz"}}'
  }
};

const Template = (args) => <MainSection {...args} />;

export const All = Template.bind({});
All.args = {};