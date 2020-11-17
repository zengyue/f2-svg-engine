import { Shape } from '@antv/g-svg';

class Polyline extends Shape.Polyline {
  createPath(context) {
    const attrs = this.attr();
    const points = attrs.points.map(point => {
      return [ point.x, point.y ];
    });
    super.createPath(context, {
      ...attrs,
      points
    });
  }
}

export default Polyline;
