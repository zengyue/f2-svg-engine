import { Canvas as GCavans } from '@antv/g-svg';
import Shape from './shape';
import Group from './group';

class Canvas extends GCavans {
  constructor(cfg) {
    super({
      ...cfg,
      container: cfg.el
    });
  }
  // @ts-ignore
  getShapeBase() {
    return Shape;
  }
  // @ts-ignore
  getGroupBase() {
    return Group;
  }
}

export default Canvas;
