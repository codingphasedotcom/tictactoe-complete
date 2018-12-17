export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.audio('intro_music', ['/assets/music/01-Opening.ogg']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('bgbox', '/assets/sprites/titlescreen/bgbox.png');
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.image(
			'tictactoe',
			'/assets/sprites/titlescreen/tictactoetitle.png'
		);
		this.load.image(
			'championships',
			'/assets/sprites/titlescreen/championshipstitle.png'
		);
		this.load.image(
			'startbutton',
			'/assets/sprites/titlescreen/startbutton.png'
		);
		this.load.image('title', '/assets/sprites/titlescreen/title.png');
		this.load.script(
			'webfont',
			'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
		);

		var progress = this.add.graphics();
		const self = this;
		this.load.on('progress', function(value) {
			progress.clear();
			progress.fillStyle(0x42f456, 1);
			progress.fillRect(0, 300, 800 * value, 20);
		});

		this.load.on('complete', function() {
			progress.destroy();
		});
	}
	create() {
		this.intro_music = this.sound.add('intro_music', {
			mute: false,
			volume: 1,
			rate: 1,
			detune: 0,
			seek: 0,
			loop: true,
			delay: 0
		});
		// this.intro_music.play();
		this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);
		this.bgbox = this.add
			.image(0, 0, 'bgbox')
			// .setScale(0.5, 0.5)
			.setAlpha(0)
			.setOrigin(0, 0);
		// .setAlpha(0.6);
		this.title = this.add
			.image(this.game.config.width / 2, 110, 'title')
			.setAlpha(0);

		this.championships = this.add
			.image(this.game.config.width / 2, 200, 'championships')
			.setAlpha(0);
		this.tictactoe = this.add
			.image(this.game.config.width / 2, 230, 'tictactoe')
			.setAlpha(0);
		this.startbutton = this.add
			.image(this.game.config.width / 2, 250, 'startbutton')
			.setAlpha(0);

		this.bgboxTween = this.tweens.timeline({
			targets: this.bgbox,
			ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			loop: 0,
			tweens: [
				{
					// x: this.game.config.width / 2,
					// y: 2000,
					alpha: 0.5,
					ease: 'Linear',
					duration: 2000,
					delay: 2000,
					repeat: 0 // -1: infinity
					// yoyo: false,
					// offset: '-=500',   // starts 500ms before previous tween ends
				}
			]
		});
		this.titleTween = this.tweens.timeline({
			targets: this.title,
			ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			loop: 0,
			tweens: [
				{
					x: this.game.config.width / 2,
					y: 100,
					alpha: 1,
					ease: 'Linear',
					duration: 600,
					repeat: 0,
					delay: 500 // -1: infinity
					// yoyo: false,
					// offset: '-=500',   // starts 500ms before previous tween ends
				},
				{
					x: this.game.config.width / 2,
					y: 105,
					alpha: 1,
					ease: 'Linear',
					duration: 600,
					repeat: -1,
					// delay: 300,
					yoyo: true
					// offset: '-=500',   // starts 500ms before previous tween ends
				}
			]
		});
		this.titleChampionship = this.tweens.timeline({
			targets: this.championships,
			ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			loop: 0,
			tweens: [
				{
					x: this.game.config.width / 2,
					y: 170,
					alpha: 1,
					ease: 'Linear',
					duration: 600,
					repeat: 0,
					delay: 1300 // -1: infinity
					// yoyo: false,
					// offset: '-=500',   // starts 500ms before previous tween ends
				}
			]
		});
		this.titleTicTacToe = this.tweens.timeline({
			targets: this.tictactoe,
			ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			loop: 0,
			tweens: [
				{
					x: this.game.config.width / 2,
					y: 200,
					alpha: 1,
					ease: 'Linear',
					duration: 600,
					repeat: 0,
					delay: 1600 // -1: infinity
					// yoyo: false,
					// offset: '-=500',   // starts 500ms before previous tween ends
				}
			]
		});
		this.tweens.timeline({
			targets: this.startbutton,
			ease: 'Linear', // 'Cubic', 'Elastic', 'Bounce', 'Back'
			loop: 0,
			tweens: [
				{
					alpha: 1,
					ease: 'Linear',
					duration: 500,
					repeat: 0,
					delay: 1900 // -1: infinity
					// yoyo: false,
					// offset: '-=500',   // starts 500ms before previous tween ends
				}
			]
		});
		this.keys = this.input.keyboard.addKeys('ENTER,SPACE');

		this.startbutton.setInteractive().on('pointerdown', () => {
			this.intro_music.stop();
			this.scene.start('Level1');
		});
	}
	update(delta) {
		if (this.keys.SPACE.isDown || this.keys.ENTER.isDown) {
			this.scene.start('Level1');
		}
	}
}
