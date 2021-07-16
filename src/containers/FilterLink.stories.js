import React from 'react'
import FilterLink from './FilterLink'
import { PARAM_REDUX_MERGE_STATE } from 'addon-redux'

export default {
  title: 'FilterLink',
  component: FilterLink,
  parameters: {
    [PARAM_REDUX_MERGE_STATE]: '{"toasdf": {"a": "c"}}'
  },
  argTypes: {
    filter: {
      description: 'description here',
      type: 'string'
    },
  },
};

const Template = (args) => <FilterLink {...args}>Link Text</FilterLink>;

export const All = Template.bind({});
All.args = {
  filter: 'show_all'
};