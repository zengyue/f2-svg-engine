import { Shape } from '@antv/g-svg';
import Polyline from './polyline';
import Sector from './sector';

const { Base, Circle, Ellipse, Image, Line, Marker, Path, Polygon, Rect, Text } = Shape;

// @ts-ignore
Base.Rect = Rect;
// @ts-ignore
Base.Circle = Circle;
// @ts-ignore
Base.Ellipse = Ellipse;
// @ts-ignore
Base.Image = Image;
// @ts-ignore
Base.Line = Line;
// @ts-ignore
Base.Marker = Marker;
// @ts-ignore
Base.Path = Path;
// @ts-ignore
Base.Polygon = Polygon;
// @ts-ignore
Base.Text = Text;
// @ts-ignore
Base.Polyline = Polyline;
// @ts-ignore
Base.Sector = Sector;

export default Base;