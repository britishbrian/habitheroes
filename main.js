//Arrays
taskArray = []
heroArray = []
monsterArray = []
itemArray = []

//Other Variables
monsterQueue = [] //hidden from user
heroQueue = [] //add hero here when bought
player = Player("player")

//Models
function Player(name) {
	//this.id = id
	this.name = name
	this.points = 0
	this.gold = 0
	this.tasks = []
	this.items = []
}

function Task(id, name, difficulty, type) {
	this.id = id
	this.name = name
	this.difficulty = difficulty // veryEasy, easy, medium, hard, extreme
	this.type = type //can be oneTime or habit
}

function Hero(id, name, stars, hp, power) {
	this.id = id
	this.name = name
	this.stars = stars
	this.hp = hp
	this.power = power
}

function Monster(id, name, hp, power, gold) {
	this.id = id
	this.name = name
	this.hp = hp
	this.power = power
	this.gold = gold
}

function Item(id, name, type, healthBonus, powerBonus) {
	this.id = id
	this.name = name
	this.type = type //head, chest, legs, feet, hands
	this.healthBonus = healthBonus
	this.powerBonus = powerBonus
}

//Make Instances of Each Class





//Functions
//when they click on task
difficultyMapping = {
	"veryEasy": 1,
	"easy": 2,
	"medium": 3,
	"hard": 5,
	"extreme": 8,
}
function completeTask(taskId) {
	var completedTask = taskArray[taskId];
	player.points += difficultyMapping[completedTask.difficulty]
	if(completedTask.type == "oneTime") {
		taskArray.splice(taskId, 1);
	}
}

//add a task
function addTask(name, difficulty, type) {
	//create task
	var newTask = Task(taskArray.length, name, difficulty, type);
	//add it to the taskArray
	taskArray.push(newTask)
}

summonInfo = {
	"basic" : {
		"range" : {"lower": 1, "upper": 4}
	},
	"super" : {
		"range" : {"lower": 3, "upper": 5}
	},
	"ultra" : {
		"range" : {"lower": 4, "upper": 7}
	}
}

function summonHero(type) {
	range = summonInfo[type]["range"];
	randomStarLevel = range["lower"] + Math.floor((Math.random() * (range["upper"] - range["lower"])));
	var hero;
	while 1 {
		randomIndex = Math.floor(Math.random() * heroArray.length);
		hero = heroArray[randomIndex];
		if(hero.stars == randomStarLevel) {
				break;
		}
	}
	heroQueue.push(hero)
}

function buyItem(item) {

}



//convert state to front end
function update() {
	



}







//run battle sequence
