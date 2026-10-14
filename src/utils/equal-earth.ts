// Equal Earth forward projection (Šavrič, Patterson & Jenny 2018), matching d3-geo's geoEqualEarth.
const A1 = 1.340264;
const A2 = -0.081106;
const A3 = 0.000893;
const A4 = 0.003796;
const M = Math.sqrt(3) / 2;
const toRadians = Math.PI / 180;

type Projection = {
  scale: number;
  translate: readonly [number, number];
};

/** Projects a [longitude, latitude] pair into the generated world map's SVG coordinates. */
export function projectPoint([longitude, latitude]: readonly [number, number], { scale, translate }: Projection) {
  const lambda = longitude * toRadians;
  const l = Math.asin(M * Math.sin(latitude * toRadians));
  const l2 = l * l;
  const l6 = l2 * l2 * l2;
  const x = (lambda * Math.cos(l)) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)));
  const y = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2));

  return { x: translate[0] + scale * x, y: translate[1] - scale * y };
}
