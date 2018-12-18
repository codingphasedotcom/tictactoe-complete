export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.audio('intro_music', ['/assets/music/01-Opening.ogg']);
		this.load.image('background', '/assets/sprites/titlescreen/background.png');
		this.load.image('box_blank', '/assets/sprites/box_blank.png');
		this.load.image('boardbg', '/assets/sprites/board/boardbg.png');
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
		// this.intro_music.play();
		this.background = this.add.image(0, 0, 'background').setOrigin(0, 0);

		// .setAlpha(0.6);
		this.title = this.add
			.image(this.game.config.width / 2, 110, 'title')
			.setAlpha(0);

		this.boardbg = this.add
			.image(21, 91, 'boardbg')
			.setOrigin(0, 0)
			.setAlpha(1);
		this.box_blank1 = this.add
			.image(32, 102, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank2 = this.add
			.image(74, 102, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank3 = this.add
			.image(116, 102, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank4 = this.add
			.image(32, 144, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank5 = this.add
			.image(74, 144, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank6 = this.add
			.image(116, 144, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank7 = this.add
			.image(32, 186, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank8 = this.add
			.image(74, 186, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
		this.box_blank9 = this.add
			.image(116, 186, 'box_blank')
			// .setScale(0.5, 0.5)
			.setAlpha(1)
			.setOrigin(0, 0);
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
