
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var PhaserTemplate = (function () {
'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var phaser_min$2 = {exports: {}};

var phaser_min = phaser_min$2.exports;

(function (module, exports) {
} (phaser_min$2, phaser_min$2.exports));

var phaser_minExports = phaser_min$2.exports;
var phaser_min$1 = /*@__PURE__*/getDefaultExportFromCjs(phaser_minExports);

/**
  * This is the Boot.ts code
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-20
  */
class Boot extends phaser_minExports.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
        this.load.image('background', 'assets/bg.png');
    }
    create() {
        this.scene.start('Preloader');
    }
}

/**
  * This is the Game.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */
class Game extends phaser_minExports.Scene {
    constructor() {
        super('Game');
        Object.defineProperty(this, "camera", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "msg_text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);
        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);
        this.msg_text = this.add.text(512, 384, 'Hello, World!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.msg_text.setOrigin(0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('GameOver');
        });
    }
}

/**
  * This is the GameOver.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */
class GameOver extends phaser_minExports.Scene {
    constructor() {
        super('GameOver');
        Object.defineProperty(this, "camera", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gameover_text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    create() {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0xff0000);
        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);
        this.gameover_text = this.add.text(512, 384, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });
        this.gameover_text.setOrigin(0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}

/**
  * This is the MainMenu.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */
class MainMenu extends phaser_minExports.Scene {
    constructor() {
        super('MainMenu');
        Object.defineProperty(this, "gray_background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "logo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    create() {
        this.gray_background = this.add.sprite(0, 0, "gray_background");
        this.gray_background.x = 1920 / 2;
        this.gray_background.y = 1080 / 2;
        this.logo = this.add.image(512, 300, 'logo');
        this.title = this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.input.once('pointerdown', () => {
            this.scene.start('Game');
        });
    }
}

/**
  * This is the preloader.ts code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */
class Preloader extends phaser_minExports.Scene {
    constructor() {
        super('Preloader');
    }
    init() {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, 'background');
        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);
        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });
    }
    preload() {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('assets');
        this.load.image('logo', 'logo.png');
        this.load.image('gray_background', 'gray_background.jpg');
    }
    create() {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.
        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}

/**
  * This is the main code that runs
  * By: Evgeny Vovk
  * Version: 1.0
  * Since: 2024-05-21
  */
//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ]
};
var main = new phaser_minExports.Game(config);

return main;

})();
//# sourceMappingURL=bundle.js.map