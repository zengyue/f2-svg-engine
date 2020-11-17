# f2-svg-engine
f2 svg render engine

## Usage

```javascript
import F2 from '@antv/f2';
import * as SVGEngine from 'f2-svg-engine';

// register svg engine
F2.G.registerEngine('svg', SVGEngine);

// create container
const container = document.createElement('div');
document.body.appendChild(container);

const chart = new F2.Chart({
  el: container,
  width: 375,
  height: 260,
  animate: false,
  // set svg engine
  renderer: 'svg'
});
...

chart.render();

```
