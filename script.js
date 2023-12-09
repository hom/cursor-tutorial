function getCrosshairSvg(
  crosshairOptions = {
    x: 128,
    y: 128,
    dx1: 0,
    dy1: 0,
    dx2: 0,
    dy2: 0,
  }
) {
  const {
    x = 128,
    y = 128,
    dx1 = 0,
    dy1 = 0,
    dx2 = 0,
    dy2 = 0,
  } = crosshairOptions;
  const dx = x - dx1 - dx2;
  const dy = y - dy1 - dy2;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", dx.toString());
  svg.setAttribute("height", dy.toString());
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const crosshair = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  crosshair.setAttribute(
    "d",
    `M 0 ${y / 2 - dy1} H ${dx} M ${x / 2 - dx1} 0 V ${dy}`
  );
  crosshair.setAttribute("stroke", "#ffffff");
  crosshair.setAttribute("fill", "none");
  svg.appendChild(crosshair);
  //   g.appendChild(crosshair);
  //   svg.appendChild(g);
  console.log(svg);
  console.log(svg.outerHTML);
  console.log(btoa(svg.outerHTML).length);
  return svg;
}
