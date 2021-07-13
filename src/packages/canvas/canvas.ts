export interface CanvasConfig {
	backgroundColor: string;
	fillColor: string;
	strokeColor: string;
	strokeWidth: string;
}

export class Canvas {
	private readonly ctx: CanvasRenderingContext2D;

	private config: CanvasConfig = {
		backgroundColor: '#000',
		fillColor: '#ccc',
		strokeColor: '#fff',
		strokeWidth: '2px'
	}

	constructor(private readonly host: HTMLCanvasElement) {
		this.ctx = host.getContext("2d");
	}

	public setCanvasSize(width: number, height: number) {
		this.host.width = width;
		this.host.height = height;
	}

	public setConfig(config: Partial<CanvasConfig>) {
		for (let [key, value] of Object.entries(config)) {
			this.config[key] = value;
		}
	}

	public square(x: number, y: number, width: number, height: number, fillColor = this.config.fillColor) {
		this.ctx.save();
		this.ctx.fillStyle = fillColor;
		this.ctx.fillRect(x, y, width, height);
		this.ctx.restore();
	}

	public background() {
		this.ctx.save();
		this.ctx.fillStyle = this.config.backgroundColor;
		this.ctx.fillRect(0, 0, this.host.width, this.host.height);
		this.ctx.restore();
	}

}