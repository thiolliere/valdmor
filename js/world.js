var world = {};

var phys2D = Physics2DDevice.create({});

world.passive = {};

world.passive.wall = {
	material : phys2D.createMaterial({}),
	shapes : [],
	addShape : function(type,obj) {
		var shape;
		if (type === "rect") 
		{
			var vertices = phys2D.createRectangleVertices(
					obj.x,obj.y,obj.x+obj.width,obj.y+obj.height);
			shape = phys2D.createPolygonShape({
				vertices : vertices,
				material : this.material
			});
		} 
		else if (type === "path") 
		{
			var vertices = [];
			var data = obj.d;
			var x,y;
			var re = /^[^0-9.]*([0-9.]*)[^0-9.]*([0-9.]*)(.*)/;
			var array = re.exec(data);
			while (array[1] && array[2]) {
				data = array[3];
				vertices.push([array[1],array[2]]);
				array = re.exec(data);
			}

			shape = phys2D.createPolygonShape({
				vertices : vertices,
				material : this.material
			});
		} 
		else 
		{
			console.info("add wall but false type : "+type.toString());
			return
		}
		world.wall.shapes.push(shape);
	},
	createWall : function() {
		if (this.body) {
			this.body.world.removeRigidBody(this.body);
			this.body = null;
		}

		this.body = phys2D.createRigidBody({
			type : 'static',
			shapes : this.shapes,
			sleeping : false,
			bullet : false,
			position : [0, 0],
			rotation : 0,
		});
		world.physicWorld.addRigidBody(world.wall.body);
	},
	clear : function() {
		if (this.body) {
			this.body.world.removeRigidBody(this.body);
			this.body = null;
		}
		this.shapes = [];
	}
}
//
//world.monster = {
//	material : phys2D.createMaterial({}),
//	width : 30,
//	height : 30,
//	monsters : [],
//	addMonster : function(type,obj) {
//		var monster = {};
//		var w2 = this.width;
//		var h2 = this.height;
//		var vertices = phys2D.createRectangleVertices(
//				-w2,-h2,w2,h2);
//		monster.shape = phys2D.createPolygonShape({
//			vertices : vertices,
//			material : world.monster.material
//		});
//		monster.body = phys2D.createRigidBody({
//			type : 'dynamic',
//			shapes : [monster.shape],
//			sleeping : false,
//			bullet : false,
//			position : [obj.x, obj.y],
//			rotation : 0,
//		});
//		world.monster.monsters.push(monster);
//		world.physicWorld.addRigidBody(monster.body);
//	},
//	clear : function() {
//		for (var i = 0; i < this.monsters.length; i++) {
//			var monster = this.monsters[i];
//			monster.body.world.removeRigidBody(monster.body);
//		}
//		this.monsters = [];
//	}
//}

world.active = {};

world.newActive = function(obj) {
	var name = obj.name;
	if (!name) {
		console.log("newEntity no name");
		return 
	} else if (world.active.name) {
		console.log("newEntity name already used");
		return
	}

	world.active[name] = {
		svgTags : obj.svgTags || [],
		material : obj.material || phys2D.createMaterial({}),
		shapes : obj.shapes || [obj.shape],
		array : [],
		add : function(type,xmlObj) {
			var ent = {};
			ent.body = phys2D.createRigidBody({
				type : 'dynamic',
				shapes : new this.shapes,
				sleeping : false,
				bullet : false,
				position : [obj.x, obj.y],
				rotation : obj.rotation || 0,
			});
			world[name].array.push(ent);
			world.physicWorld.addRigidBody(ent.body);
		},
		clear : function() {
			for (var i = 0; i < this.array.length; i++) {
				var ent = this.array[i];
				ent.body.world.removeRigidBody(ent.body);
			}
			this.array = [];
		},
		update : function() {
		}
	}
}

world.clear = function() {
	for (var i in world.passive) {
		world.passive[i].clear();
	}
	for (var i in world.active) {
		world.passive[i].clear();
	}
	world.physicWorld = phys2D.createWorld({
		gravity : [0, 0],
		velocityIterations : 8,
		positionIterations : 8,
	});
}

world.loadmap = function(map_svg) {

	world.clear();

	var arrayTags = [];
	for (var i in world.passive) {
		arrayTags = arrayTags.concat(world.passive[i].svgTags);
	}
	for (var i in world.active) {
		arrayTags = arrayTags.concat(world.passive[i].svgTags);
	}

	var wallTags = ["rect","path"];
	var monsterTags = ["rect"];
	var mapObject = parseXml(map_svg,arrayTags);
	var g = mapObject.svg.g;

	for (var i = 0; i < g.length; i++) {

		var layer = g[i];
		if (layer.id === "wall") {

			for (var t = 0; t < wallTags.length; t++) {
				var tag = wallTags[t];
				if (layer[tag]) {
					for (var obj = 0; obj < layer[tag].length; obj++) {
						world.wall.addShape(tag,layer[tag][obj]);
					}
				}
			}

		} else if (layer.id === "monster") {

			for (var t = 0; t < monsterTags.length; t++) {
				var tag = monsterTags[t];
				if (layer[tag]) {
					for (var obj = 0; obj < layer[tag].length; obj++) {
						world.monster.addMonster(tag,layer[tag][obj]);
					}
				}
			}

		}
	}
	world.wall.createWall();
}
