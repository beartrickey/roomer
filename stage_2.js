var stageWalls = [
	createWall(-4, -2, 0, 0),
	createWall(-4, -1, 0, 0),
	createWall(-4, 0, 0, 0),
	createWall(-4, 1, 0, 0),
	createWall(-4, 2, 0, 0),
	createWall(-4, 3, 0, 0),
	createWall(-4, 4, 0, 0),
	createWall(-3, -4, 1, 0),
	createWall(-2, -4, 1, 0),
	createWall(-1, -4, 1, 0),
	createWall(0, -4, 1, 0),
	createWall(1, -4, 1, 0),
	createWall(2, -4, 1, 0),
	createWall(3, -4, 1, 0),
	createWall(4, -4, 1, 0),
	createWall(4, -4, 2, 0),
	createWall(4, -3, 2, 0),
	createWall(4, -2, 2, 0),
	createWall(4, -1, 2, 0),
	createWall(4, 0, 2, 0),
	createWall(4, 1, 2, 0),
	createWall(2, 4, 3, 0),
	createWall(1, 4, 3, 0),
	createWall(0, 4, 3, 0),
	createWall(-1, 4, 3, 0),
	createWall(-2, 4, 3, 0),
	createWall(-3, 4, 3, 0),
	createWall(-4, 4, 3, 0),
	createWall(-2, -4, 3, 0),
	createWall(-1, -4, 3, 0),
	createWall(0, -4, 3, 1),
	createWall(1, -4, 3, 0),
	createWall(2, -4, 3, 0),
	createWall(3, -4, 3, 0),
	createWall(4, -3, 0, 0),
	createWall(4, -2, 0, 0),
	createWall(4, -1, 0, 1),
	createWall(4, 0, 0, 0),
	createWall(4, 1, 0, 1),
	createWall(2, 4, 1, 1),
	createWall(1, 4, 1, 0),
	createWall(0, 4, 1, 0),
	createWall(-1, 4, 1, 0),
	createWall(-2, 4, 1, 1),
	createWall(-3, 4, 1, 0),
	createWall(-4, 3, 2, 0),
	createWall(-4, 2, 2, 0),
	createWall(-4, 1, 2, 0),
	createWall(-4, -1, 2, 0),
	createWall(0, -3, 0, 0),
	createWall(0, -3, 2, 0),
	createWall(-1, -2, 1, 0),
	createWall(-1, -2, 0, 0),
	createWall(-1, -2, 3, 0),
	createWall(0, -1, 0, 0),
	createWall(0, 0, 0, 0),
	createWall(1, -2, 1, 0),
	createWall(2, -2, 1, 0),
	createWall(3, -1, 1, 0),
	createWall(3, -1, 3, 0),
	createWall(0, 0, 2, 0),
	createWall(2, -1, 3, 0),
	createWall(-2, 3, 0, 0),
	createWall(-2, 2, 0, 0),
	createWall(-2, 2, 1, 0),
	createWall(-1, 2, 1, 0),
	createWall(0, 1, 0, 0),
	createWall(0, 1, 3, 1),
	createWall(0, 1, 2, 0),
	createWall(0, 2, 2, 0),
	createWall(0, 2, 3, 0),
	createWall(-1, 2, 3, 0),
	createWall(-2, 3, 2, 0),
	createWall(0, 0, 1, 1),
	createWall(4, -3, 1, 1),
	createWall(-4, 4, 1, 1),
	createWall(-3, 0, 1, 0),
	createWall(-3, 0, 2, 0),
	createWall(-3, 0, 3, 0),
	createWall(-4, 0, 2, 1),
	createWall(3, 2, 0, 0),
	createWall(3, 2, 1, 0),
	createWall(-1, -2, 2, 1),
	createWall(1, -2, 3, 0),
	createWall(1, -2, 0, 1),
	createWall(3, 1, 1, 0),
	createWall(2, 1, 1, 0),
	createWall(2, 1, 0, 0),
	createWall(2, 2, 0, 0),
	createWall(2, 3, 0, 0),
	createWall(2, 3, 2, 0),
	createWall(4, 1, 3, 0),
	createWall(2, 4, 2, 0),
	createWall(-3, -3, 2, 0),
	createWall(-3, -4, 0, 0),
	createWall(-3, -4, 3, 1),
	createWall(-3, -2, 2, 0),
	createWall(-3, -2, 3, 0),
	createWall(-4, -3, 3, 0),
	createWall(-3, -3, 0, 0),
	createWall(-4, -2, 2, 1),
	createWall(0, -1, 2, 0),
	createWall(2, -1, 0, 0),
	createWall(2, -1, 1, 1),
	createWall(2, -2, 2, 0),
	createWall(2, -2, 3, 1),
];

function makeStageRooms(){
	buildRoom(-3, -4);
	buildRoom(-2, -4);
	buildRoom(-1, -4);
	buildRoom(0, -4);
	buildRoom(1, -4);
	buildRoom(2, -4);
	buildRoom(3, -4);
	buildRoom(4, -4);
	buildRoom(-3, -3);
	buildRoom(0, -3);
	buildRoom(4, -3);
	buildRoom(-4, -2);
	buildRoom(-3, -2);
	buildRoom(-1, -2);
	buildRoom(0, -2);
	buildRoom(1, -2);
	buildRoom(2, -2);
	buildRoom(4, -2);
	buildRoom(-4, -1);
	buildRoom(0, -1);
	buildRoom(2, -1);
	buildRoom(3, -1);
	buildRoom(4, -1);
	buildRoom(-4, 0);
	buildRoom(-3, 0);
	buildRoom(0, 0);
	buildRoom(4, 0);
	buildRoom(-4, 1);
	buildRoom(0, 1);
	buildRoom(2, 1);
	buildRoom(3, 1);
	buildRoom(4, 1);
	buildRoom(-4, 2);
	buildRoom(-2, 2);
	buildRoom(-1, 2);
	buildRoom(0, 2);
	buildRoom(2, 2);
	buildRoom(-4, 3);
	buildRoom(-2, 3);
	buildRoom(2, 3);
	buildRoom(-4, 4);
	buildRoom(-3, 4);
	buildRoom(-2, 4);
	buildRoom(-1, 4);
	buildRoom(0, 4);
	buildRoom(1, 4);
	buildRoom(2, 4);
};
