import { fromEvent } from 'rxjs';
import { map, tap, switchMap, takeUntil } from 'rxjs/operators';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mouseDown = fromEvent(canvas, 'mousedown');
const mouseMove = fromEvent(canvas, 'mousemove');
const mouseUp = fromEvent(canvas, 'mouseup');

mouseDown.pipe(
  tap((event) => {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  }),
  switchMap(
    (event) => mouseMove.pipe(
      map(event => {
          return {x: event.offsetX, y: event.offsetY}
      }
  ),
  takeUntil(mouseUp))
  )
).subscribe(
  (pos) => {
    console.log('pos', pos);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }
)