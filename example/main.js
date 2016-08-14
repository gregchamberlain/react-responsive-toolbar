import React from 'react';
import { render } from 'react-dom';

import { Toolbar, ToolbarItem, ToolbarGroup } from '../src'

let items = [
  <ToolbarItem>Brand</ToolbarItem>,
  <ToolbarGroup float="right">
    <ToolbarItem>Link1</ToolbarItem>
    <ToolbarItem>Link2</ToolbarItem>
  </ToolbarGroup>,
];

render(
    <Toolbar items={items} color="#b535e5">
      <div style={{height: 1000}}>akjldsllakdsashdjkalhaldkjadlaksdasdljkdlaskdjadshlkajsdh
      kajsdhaksjldhasdlajdjadsalksdjhasdlkjasdhalsdk
      akjsdhaslkdjahdlkajsdhalsdk
      jaksdhaklsdjhadlkjsh</div>
    </Toolbar>
,document.getElementById('root'))
