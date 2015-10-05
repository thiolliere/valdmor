function createLoop(delay) {
	var	toUpdate = {},
	toDraw = {},
	toRemoveOfUpdate = [],
	toRemoveOfDraw = [],
	addToUpdate = function(id,obj) {
		toUpdate[id] = obj;
	},
	addToDraw = function(id,obj) {
		toDraw[id] = obj;
	},
	removeOfUpdate = function(id) {
		toRemoveOfUpdate.push(id);
	},
	removeOfDraw = function(id) {
		toRemoveOfDraw.push(id);
	},
	dt = delay,

		/* MAIN LOOP */

	loop = function() {
		var mp;
		/* UPDATE  */
		world.step(dt);

		Object.keys(toUpdate).forEach(function(key) {
			toUpdate[key].update(dt);
		});
		toRemoveOfUpdate.forEach(function(id) {
			delete toUpdate[id];
		});
		toRemoveOfUpdate = [];

		/* DRAW */
		if (window.innerWidth !== canvas.width
				|| window.innerHeigth !== canvas.height) {
			canvas.width = window.innerWidth;
			canvas.heigth = window.innerHeight;
		}
		camera.setViewport();

		if (graphicsDevice.beginFrame()){
			graphicsDevice.clear([0,0,0,0], 1.0);
			phys2DDebug.begin();

			maze.draw();

			Object.keys(toDraw).forEach(function(key) {
				toDraw[key].draw();
			});
			phys2DDebug.drawWorld(world);

			mp = mouse.getWorldPosition();
			phys2DDebug.drawCircle(mp[0],mp[1],1,[1,1,0,1])

			phys2DDebug.end();
			graphicsDevice.endFrame();
		}
		toRemoveOfDraw.forEach(function(id) {
			delete toDraw[id];
		});
		toRemoveOfDraw = [];
	};

		/* END MAIN LOOP */

	return Object.freeze({
		addToUpdate : addToUpdate,
		addToDraw : addToDraw,
		removeOfUpdate : removeOfUpdate,
		removeOfDraw : removeOfDraw,
		loop : loop,
	});
}
