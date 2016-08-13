import React from 'react';
import { render } from 'react-dom';

import { Toolbar, ToolbarItem } from '../src'

let items = [
  <ToolbarItem>Brand</ToolbarItem>,
  <ToolbarItem>Link1</ToolbarItem>,
  <ToolbarItem>Link2</ToolbarItem>,
];

render(
    <Toolbar items={items}>
      <div style={{height: 1000}}>akjldsllakdsashdjkalhaldkjadlaksdasdljkdlaskdjadshlkajsdh
      kajsdhaksjldhasdlajdjadsalksdjhasdlkjasdhalsdk
      akjsdhaslkdjahdlkajsdhalsdk
      jaksdhaklsdjhadlkjsh</div>
    </Toolbar>
,document.getElementById('root'))
