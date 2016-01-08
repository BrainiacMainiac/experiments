var gravity = {
	figure: {
		x: 150,
		y: 200,
		height: 100,
		width: 100,
		velocity: +0,
		jump_time: 0
	},
	platform: {
		top: 300,
		height: 100,
		width: 400
	},
	initiate: function() {
		gravity.canva = document.getElementById('canvas');
		gravity.canvas = gravity.canva.getContext('2d');
		gravity.loop();
	},
	loop: function() {
		gravity.gravity();
		gravity.draw();
		setTimeout((gravity.loop), 50);
	},
	jump: function() {
	if (gravity.figure.velocity === 0) {
			gravity.figure.velocity = 50;
			gravity.figure.jump_time = 1;
		} else {}
	},
	gravity: function() {
		if (gravity.figure.y > 100) {
			gravity.figure.jump_time++;
		}
		gravity.figure.y -= gravity.figure.velocity;
			gravity.figure.velocity -= 2.5 * gravity.figure.jump_time;
		if (gravity.figure.y >= 200) {
			gravity.figure.y = 200;
			gravity.figure.jump_time = 0;
			gravity.figure.velocity = 0;
		}
	},
	draw: function() {
		gravity.canvas.clearRect(0, 0, 400, 400);
		// Draw figure
		gravity.canvas.fillStyle = 'blue';
		gravity.canvas.fillRect(gravity.figure.x, gravity.figure.y, gravity.figure.width, gravity.figure.height);
		// Draw platform
		gravity.canvas.fillStyle = 'green';
		gravity.canvas.fillRect(0, gravity.platform.top, gravity.platform.width, gravity.platform.height);
	}
};
addEventListener('keydown', function(e) {
	if (e.keyCode === 38 || e.keyCode === 32) {
		gravity.jump();
	} else {}
});
gravity.initiate();
