var stageWalls = [
	createWall(0, -2, 1, 0),
	createWall(1, -2, 1, 0),
	createWall(2, -2, 1, 0),
	createWall(3, -2, 1, 0),
	createWall(-1, -4, 1, 0),
	createWall(0, -4, 1, 0),
	createWall(-1, -4, 0, 0),
	createWall(-1, -3, 0, 0),
	createWall(-1, -2, 0, 0),
	createWall(-1, -1, 0, 0),
	createWall(-2, 0, 1, 0),
	createWall(-3, 0, 1, 0),
	createWall(-3, 0, 0, 0),
	createWall(-4, 1, 1, 0),
	createWall(-4, 1, 0, 0),
	createWall(-4, 1, 3, 0),
	createWall(-3, 1, 3, 0),
	createWall(-2, 0, 3, 0),
	createWall(-1, 0, 3, 0),
	createWall(0, -4, 3, 0),
	createWall(1, -2, 3, 0),
	createWall(2, -2, 3, 0),
	createWall(4, 0, 3, 0),
	createWall(1, 3, 3, 0),
	createWall(0, 4, 3, 0),
	createWall(0, 1, 0, 0),
	createWall(0, 2, 0, 0),
	createWall(0, 3, 0, 0),
	createWall(0, 4, 0, 0),
	createWall(3, -1, 0, 0),
	createWall(3, 0, 0, 0),
	createWall(0, -4, 2, 0),
	createWall(-1, -3, 2, 0),
	createWall(-3, 1, 2, 0),
	createWall(0, 2, 2, 0),
	createWall(1, 3, 2, 0),
	createWall(1, 0, 2, 0),
	createWall(0, -1, 2, 0),
	createWall(3, -2, 2, 0),
	createWall(3, -1, 2, 0),
	createWall(4, 0, 2, 0),
	createWall(3, 1, 2, 0),
	createWall(4, 0, 1, 0),
	createWall(2, 1, 1, 0),
	createWall(1, 0, 1, 0),
	createWall(1, 1, 3, 0),
	createWall(2, 1, 3, 0),
	createWall(3, 1, 3, 0),
	createWall(1, 3, 1, 0),
	createWall(0, 4, 2, 0),
	createWall(-3, 0, 3, 1),
	createWall(0, 0, 3, 0),
	createWall(1, 0, 3, 1),
	createWall(0, 1, 3, 1),
	createWall(3, 0, 3, 1),
	createWall(3, -2, 3, 1),
	createWall(0, -2, 3, 1),
	createWall(-1, -2, 3, 0),
	createWall(-1, -1, 3, 1),
	createWall(0, -1, 3, 0),
	createWall(-1, -3, 3, 1),
	createWall(-1, -4, 3, 1),
	createWall(1, 3, 0, 1),
	createWall(0, 3, 3, 1),
	createWall(3, -1, 3, 1)
];

function makeStageRooms(){
	buildRoom(-1, -4);
	buildRoom(0, -4);
	buildRoom(-1, -3);
	buildRoom(-1, -2);
	buildRoom(0, -2);
	buildRoom(1, -2);
	buildRoom(2, -2);
	buildRoom(3, -2);
	buildRoom(-1, -1);
	buildRoom(0, -1);
	buildRoom(3, -1);
	buildRoom(-3, 0);
	buildRoom(-2, 0);
	buildRoom(-1, 0);
	buildRoom(0, 0);
	buildRoom(1, 0);
	buildRoom(3, 0);
	buildRoom(4, 0);
	buildRoom(-4, 1);
	buildRoom(-3, 1);
	buildRoom(0, 1);
	buildRoom(1, 1);
	buildRoom(2, 1);
	buildRoom(3, 1);
	buildRoom(0, 2);
	buildRoom(0, 3);
	buildRoom(1, 3);
	buildRoom(0, 4);
};
