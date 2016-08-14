import React from 'react';
import { render } from 'react-dom';

import { Toolbar, ToolbarItem, ToolbarGroup } from '../src'

let items = [
  <ToolbarItem>Brand</ToolbarItem>,
  <ToolbarGroup float="right">
    <ToolbarItem>Sign In</ToolbarItem>
    <ToolbarItem>Sign Up</ToolbarItem>
    <ToolbarItem>Sign Up</ToolbarItem>
  </ToolbarGroup>,
];

render(
    <Toolbar items={items}>
      <div style={{height: 1000}}>akjldsllakdsashdjkalhaldkjadlaksdasdljkdlaskdjadshlkajsdh
      kajsdhaksjldhasdlajdjadsalksdjhasdlkjasdhalsdk
      akjsdhaslkdjahdlkajsdhalsdk
      jaksdhaklsdjhadlkjsh</div>
    </Toolbar>
,document.getElementById('root'))
