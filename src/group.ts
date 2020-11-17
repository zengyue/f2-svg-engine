import { Group as GGroup } from '@antv/g-svg';
import Shape from './shape';

class Group extends GGroup {
  // @ts-ignore
  getShapeBase() {
    return Shape;
  }
  // @ts-ignore
  getGroupBase() {
    return Group;
  }
  getBBox() {
    const el = this.get('el');
    if (el) {
      const bbox = el.getBBox();
      const { x, y, width, height } = bbox;
      return {
        x,
        y,
        minX: x,
        minY: y,
        maxX: x + width,
        maxY: y + height,
        width,
        height
      };
    }
    return super.getBBox();
  }
}

export default Group;
