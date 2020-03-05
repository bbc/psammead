import React from 'react';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import Include from './index';

const markup = `<!DOCTYPE html><html lang="en"> <script type="text/javascript">var count=0; function incrementCount(cnt){count=cnt + 1; document.getElementById('count').innerHTML=count;}; function decrementCount(cnt){count=cnt - 1; document.getElementById('count').innerHTML=count;}; </script> <head> <style>html{display: inline-flex;}span{background-color: #333; border-radius: 3px; color: #fff; padding: 1px 5px;}button{background-color: #fff; border: 1px solid currentColor; border-radius: 3px; cursor: pointer; outline: 0;}button:active{background-color: #333; color: #fff;}button, span{margin: 0 2px;}</style> </head> <body> <div> <span id="count">0</span> <button onClick="incrementCount(count)">Increase Count</button> <button onClick="decrementCount(count)">Decrease Count</button> </div></body></html>`;

describe('Include', () => {
  shouldMatchSnapshot(
    'should dangerously render a html markup',
    <Include html={markup} />,
  );
});
