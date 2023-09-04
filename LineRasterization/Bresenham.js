function drawLine(x0, y0, x1, y1) {
    const dx = Math.abs(x1 - x0);
    const dy = Math.abs(y1 - y0);
    const incX = (x0 < x1) ? 1 : -1;
    const incY = (y0 < y1) ? 1 : -1;
    let x = x0;
    let y = y0;
    let err = dx - dy;
  
    while (x !== x1 || y !== y1) {
      plotPixel(x, y);
  
      const err2 = 2 * err;
      if (err2 > -dy) {
        err -= dy;
        x += incX;
      }
      if (err2 < dx) {
        err += dx;
        y += incY;
      }
    }
  }