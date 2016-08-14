import React from 'react';
import { render } from 'react-dom';

import { Toolbar, ToolbarItem, ToolbarGroup } from '../src'

let items = [
  <ToolbarItem highlight="rgba(0,0,0,0)">Brand</ToolbarItem>,
  <ToolbarGroup float="right">
    <ToolbarItem>Sign In</ToolbarItem>
    <ToolbarItem>Sign Up</ToolbarItem>
  </ToolbarGroup>,
];

render(
    <Toolbar items={items} >
      <div style={{height: 1000}}></div>
    </Toolbar>
,document.getElementById('root'))
