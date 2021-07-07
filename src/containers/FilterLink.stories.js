import React from 'react'
import FilterLink from './FilterLink'

export default {
  title: 'FilterLink',
  component: FilterLink,
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
  filter: 'All'
};