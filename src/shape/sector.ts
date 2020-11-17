import { Shape } from '@antv/g-svg';

class Sector extends Shape.Path {
  createPath(context) {
    const attrs = this.attr();
    const { x, y, r, r0, startAngle, endAngle, anticlockwise } = attrs;

    const unitX = Math.cos(startAngle);
    const unitY = Math.sin(startAngle);

    const path = [
      [ 'M', unitX * r0 + x, unitY * r0 + y ],
      [ 'L', unitX * r + x, unitY * r + y ]
    ];
    // 当扇形的角度非常小的时候，就不进行弧线的绘制；或者整个只有1个扇形时，会出现end<0的情况不绘制
    if (Math.abs(endAngle - startAngle) > 0.0001 || startAngle === 0 && endAngle < 0) {
      const largeArcFlag = 0;
      path.push([ 'A',
        r, r,
        0,
        largeArcFlag,
        anticlockwise ? 0 : 1,
        Math.cos(endAngle) * r + x, Math.sin(endAngle) * r + y
      ]);
      path.push([ 'L', Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y ]);
      if (r0 !== 0) {
        path.push([ 'A',
          r0, r0,
          0,
          largeArcFlag,
          !anticlockwise ? 0 : 1,
          unitX * r0 + x, unitY * r0 + y
        ]);
      }
    }
    path.push([ 'Z' ]);
    super.createPath(context, {
      ...attrs,
      path
    });
  }
}

export default Sector;
