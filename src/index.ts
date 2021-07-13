import './styles/styles.scss';
import { Canvas } from './packages';

(function () {
	let canvasHost = document.getElementById('canvas') as HTMLCanvasElement;
	let c = new Canvas(canvasHost);

	c.setCanvasSize(window.innerWidth, window.innerHeight);
	c.setConfig({ backgroundColor: 'red' });

	let xPos = 150;

	anim8(c, xPos);

	window.addEventListener('resize', () => {
		c.setCanvasSize(window.innerWidth, window.innerHeight);
		c.background();
	});

	console.log({ c });
})();

function anim8(c: Canvas, xPos: number) {
	window.requestAnimationFrame(() => {
		c.background();
		c.square(++xPos, ++xPos, 150, 150);
		anim8(c, xPos);
	});
}