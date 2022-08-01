let x = 0;
let y = 0;
let size = 20;
let wall = "w";
let wallArt = new Array('img/Wall1.png', 'img/Wall2.png', 'img/Wall3.png', 'img/Wall4.png', 'img/Wall5.png', 'img/Wall6.png');
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let palya = new Array(15);
let kulcsKep = document.getElementById("key");
let palyaKulcs = "k";
let mainCharacter = "m";
let mainCharacterPicture = document.getElementById("crazyface");
let closedDoor = "cd";
let openDoor = "od";
let openDoorImage = document.getElementById("openDoor");
let closedDoorImage = document.getElementById("closedDoor");
let levelNumber = 0;
let targetX = 0;
let targetY = 0;
let actualEnemy = "en";
let enemyPicture = document.getElementById("pika");
let playerLives = 3;
let playerLifeCounter = document.getElementById("playerLives");
let extraLifeImage = document.getElementById("heart");
let extraLifePickup = "ex";
let shieldImage = document.getElementById("shield");
let shield = "sh";
let shieldIsOn = 0;
let counter1 = 0;
let counter2 = 7;
let counter3 = 4;
let VictoryImage = new Image();
VictoryImage.src = 'img/VictoryImage.png';
let staticEnemy = new Image();
staticEnemy.src = 'img/StaticEnemy.png';
let levelCounter = document.getElementById("level");
let playerIsDed = 0;

function LevelOne(){
    levelNumber = 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palya = palya.splice(0, palya.length);
    for (let i = 0;i < palya.length; i++) {
        palya[i] = new Array(8);
    }
    for (let i = 0; i < palya.length; i++) {
        for (let j = 0; j < palya[i].length; j++) {
            palya[i][j] = 0;
        }
    }
    x = 0;
    y = 0;
    levelCounter.innerText = "Level 1";
    playerLifeCounter.innerText = "Player Lives: " + playerLives;
    levelColor();
    mainChar(x, y);
    levelOneBlocks();
    ctx.drawImage(kulcsKep, (size * 13) + 2, (size * 6) + 2, size - 4, size - 4);
    ctx.drawImage(closedDoorImage, (size * 14), (size * 0), size, size);
    console.log(palya);
}

function LevelTwo(){
    counter1 = 0;
    levelNumber = 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palya = palya.splice(0, palya.length);
    for (let i = 0;i < palya.length; i++) {
        palya[i] = new Array(8);
    }
    for (let i = 0; i < palya.length; i++) {
        for (let j = 0; j < palya[i].length; j++) {
            palya[i][j] = 0;
        }
    }
    x = 0;
    y = 0;
    levelCounter.innerText = "Level 2";
    playerLifeCounter.innerText = "Player Lives: " + playerLives;
    levelColor();
    createEnemyLevelTwo()
    levelTwoBlocks();
    mainChar(x, y);
    console.log(palya);
}

function LevelThree(){
    levelNumber = 3;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palya = palya.splice(0, palya.length);
    for (let i = 0;i < palya.length; i++) {
        palya[i] = new Array(8);
    }
    for (let i = 0; i < palya.length; i++) {
        for (let j = 0; j < palya[i].length; j++) {
            palya[i][j] = 0;
        }
    }
    x = 0;
    y = 0;
    levelCounter.innerText = "Level 3";
    playerLifeCounter.innerText = "Player Lives: " + playerLives;
    levelColor();
    levelThreeBlocks();
    mainChar(x, y);
    placeLevel3enemy();
    console.log(palya);
}

function LevelFour(){
    levelNumber = 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palya = palya.splice(0, palya.length);
    for (let i = 0;i < palya.length; i++) {
        palya[i] = new Array(8);
    }
    for (let i = 0; i < palya.length; i++) {
        for (let j = 0; j < palya[i].length; j++) {
            palya[i][j] = 0;
        }
    }
    x = 0;
    y = 0;
    levelCounter.innerText = "Level 4";
    playerLifeCounter.innerText = "Player Lives: " + playerLives;
    levelColor();
    mainChar(x, y);
    levelFourBlocks();
    placeLevel4Enemies();
    console.log(palya);
}

function VictoryScreen(){
    levelNumber = 9000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palya = palya.splice(0, palya.length);
    levelCounter.innerText = "VICTORY!";
    ctx.drawImage(VictoryImage, 0, 0, 300, 160);
}

function mainChar(x, y) {
    ctx.drawImage(mainCharacterPicture, (x * size) + 2, (y * size) + 2, size - 4, size - 4);
    palya[x][y] = mainCharacter;
}

function putEnemyAndImage(a, b) {
    ctx.drawImage(enemyPicture, (a * size) + 2, (b * size) + 2, size - 4, size - 4);
    palya[a][b] = actualEnemy;
}

function putStaticEnemyAndImage(a, b) {
    ctx.drawImage(staticEnemy, (a * size) + 2, (b * size) + 2, size - 4, size - 4);
    palya[a][b] = actualEnemy;
}

function createWallandImage(a, b) {
    let randomElementInWallArt = Math.floor(Math.random() * wallArt.length);
    let wallimage = new Image;
    wallimage.onload = function (){
        ctx.drawImage(wallimage, (a * size), (b * size), size, size);
    }
    wallimage.src = wallArt[randomElementInWallArt];
    palya[a][b] = wall;
}

function placeShield(a, b) {
    palya[a][b] = shield;
    ctx.drawImage(shieldImage, (size * a) + 2, (size * b + 2), size - 4, size - 4);
}

function placeHeart(a, b) {
    palya[a][b] = extraLifePickup;
    ctx.drawImage(extraLifeImage, (size * a) + 2, (size * b) + 2, size - 4, size - 4);
}

function placeKey(a, b) {
    palya[a][b] = palyaKulcs;
    ctx.drawImage(kulcsKep, (size * a) + 2, (size * b) + 2, size - 4, size - 4);
}

function placeClosedDoor(a, b) {
    palya[a][b] = closedDoor;
    ctx.drawImage(closedDoorImage, (size * a), (size * b), size, size);
}

function createEnemyLevelTwo() {
    putEnemyAndImage(4, 0);
    putEnemyAndImage(6, 2);
    putEnemyAndImage(10, 7);
    putEnemyAndImage(12, 4);
}

function LevelTwoEnemy1Mover() {
    if (counter1 < 7) {
        fullyClearChar(4, counter1);
        counter1++;
        if (palya[4][counter1] == mainCharacter) {
            putEnemyAndImage(4, counter1);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(4, counter1);
        }
    } else {
        fullyClearChar(4, 14 - counter1);
        counter1++;
        if (palya[4][14 - counter1] == mainCharacter) {
            putEnemyAndImage(4, 14 - counter1);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(4, 14 - counter1);
        }
        if (counter1 == 14) {
            counter1 = 0;
        }
    }
}

function LevelTwoEnemy2Mover() {
    if (counter2 > 0) {
        fullyClearChar(10, counter2);
        counter2--;
        if (palya[10][counter2] == mainCharacter) {
            putEnemyAndImage(10, counter2);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(10, counter2);
        }
    } else {
        fullyClearChar(10, 0 - counter2);
        counter2--;
        if (palya[10][0 - counter2] == mainCharacter) {
            putEnemyAndImage(10, 0 - counter2);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(10, 0 - counter2);
        }
        if (counter2 == -7) {
            counter2 = 7;
        }
    }
}

function LevelTwoEnemy3Mover() {
    if (counter3 < 7) {
        fullyClearChar(12, counter3);
        counter3++;
        if (palya[12][counter3] == mainCharacter) {
            putEnemyAndImage(12, counter3);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(12, counter3);
        }
    } else {
        fullyClearChar(12, 14 - counter3);
        counter3++;
        if (palya[12][14 - counter3] == mainCharacter) {
            putEnemyAndImage(12, 14 - counter3);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(12, 14 - counter3);
        }
        if (counter3 == 10) {
            counter3 = 4;
        }
    }
}

let coordX = 6;
let coordY = 2;
let xCounter = 0;
let yCounter = 0;
let secondXcounter = 0;
let secondYcounter = 0;

function LevelTwoEnemy4Mover() {
    if (xCounter == 0 || xCounter == 1) {
        fullyClearChar(coordX + xCounter, coordY);
        xCounter++;
        if (palya[coordX + xCounter][coordY] == mainCharacter) {
            putEnemyAndImage(coordX + xCounter, coordY);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(coordX + xCounter, coordY);
        }
    }
    else if ((xCounter == 2 && yCounter == 0) || (xCounter == 2 && yCounter == 1)) {
        fullyClearChar(coordX + xCounter, coordY + yCounter);
        yCounter++;
        if (palya[coordX + xCounter][coordY + yCounter] == mainCharacter) {
            putEnemyAndImage(coordX + xCounter, coordY + yCounter);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(coordX + xCounter, coordY + yCounter);
        }
    }
    else if (xCounter == 2 && yCounter == 2 && secondXcounter < 2){
        fullyClearChar(coordX + xCounter - secondXcounter, coordY + yCounter);
        secondXcounter++;
        if (palya[coordX + xCounter - secondXcounter][coordY + yCounter] == mainCharacter) {
            putEnemyAndImage(coordX + xCounter - secondXcounter, coordY + yCounter);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(coordX + xCounter - secondXcounter, coordY + yCounter);
        }
    }
    else if (xCounter == 2 && yCounter == 2 && secondXcounter == 2 && secondYcounter < 2) {
        fullyClearChar(coordX, coordY + yCounter - secondYcounter);
        secondYcounter++;
        if (palya[coordX][coordY + yCounter - secondYcounter] == mainCharacter) {
            putEnemyAndImage(coordX, coordY + yCounter - secondYcounter);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(coordX, coordY + yCounter - secondYcounter);
        }
    } else {
        xCounter = 0;
        yCounter = 0;
        secondXcounter = 0;
        secondYcounter = 0;
        fullyClearChar(coordX + xCounter, coordY);
        xCounter++;
        if (palya[coordX + xCounter][coordY] == mainCharacter) {
            putEnemyAndImage(coordX + xCounter, coordY);
            playerIsDed = 1;
        } else {
            putEnemyAndImage(coordX + xCounter, coordY);
        }
    }
}

let level3EnemyX = 13;
let level3EnemyY = 6;

function placeLevel3enemy() {
    putEnemyAndImage(13, 6);
    level3EnemyX = 13;
    level3EnemyY = 6;
}

function level3EnemyMover() {
    if (level3EnemyX == 100) {
        return;
    }
    if (y < level3EnemyY && palya[level3EnemyX][level3EnemyY - 1] != wall) {
        fullyClearChar(level3EnemyX, level3EnemyY);
        level3EnemyY--;
        if (x == level3EnemyX && y == level3EnemyY) {
            if (shieldIsOn == 1) {
                shieldIsOn = 0;
                level3EnemyX = 100;
                level3EnemyY = 100;
            } else {
                putEnemyAndImage(level3EnemyX, level3EnemyY);
                playerIsDed = 1;
            }
        } else {
            putEnemyAndImage(level3EnemyX, level3EnemyY);
        }
    }
    else if (y > level3EnemyY && palya[level3EnemyX][level3EnemyY + 1] != wall) {
        fullyClearChar(level3EnemyX, level3EnemyY);
        level3EnemyY++;
        if (x == level3EnemyX && y == level3EnemyY) {
            if (shieldIsOn == 1) {
                shieldIsOn = 0;
                level3EnemyX = 100;
                level3EnemyY = 100;
            } else {
                putEnemyAndImage(level3EnemyX, level3EnemyY);
                playerIsDed = 1;
            }
        } else {
            putEnemyAndImage(level3EnemyX, level3EnemyY);
        }
    }
    else if (y == level3EnemyY) {
        if (x < level3EnemyX && palya[level3EnemyX - 1][level3EnemyY] != wall) {
            fullyClearChar(level3EnemyX, level3EnemyY);
            level3EnemyX--;
            if (x == level3EnemyX) {
                if (shieldIsOn == 1) {
                    shieldIsOn = 0;
                    level3EnemyX = 100;
                    level3EnemyY = 100;
                } else {
                    putEnemyAndImage(level3EnemyX, level3EnemyY);
                    playerIsDed = 1;
                }
            } else {
                putEnemyAndImage(level3EnemyX, level3EnemyY);
            }
        }
        else if(x > level3EnemyX && palya[level3EnemyX + 1][level3EnemyY] != wall) {
            fullyClearChar(level3EnemyX, level3EnemyY);
            level3EnemyX++;
            if (x == level3EnemyX) {
                if (shieldIsOn == 1) {
                    shieldIsOn = 0;
                    level3EnemyX = 100;
                    level3EnemyY = 100;
                } else {
                    putEnemyAndImage(level3EnemyX, level3EnemyY);
                    playerIsDed = 1;
                }
            } else {
                putEnemyAndImage(level3EnemyX, level3EnemyY);
            }
            putEnemyAndImage(level3EnemyX, level3EnemyY);
        }
    }
}

function placeLevel4Enemies() {
    //dynamic enemies
    putEnemyAndImage(0, 6);
    putEnemyAndImage(2, 6);
    putEnemyAndImage(4, 6);
    putEnemyAndImage(6, 6);
    putEnemyAndImage(7, 0);
    putEnemyAndImage(7, 2);
    putEnemyAndImage(7, 4);
    putEnemyAndImage(7, 6);
    //static enemies
    putStaticEnemyAndImage(1, 2);
    putStaticEnemyAndImage(3, 4);
    putStaticEnemyAndImage(5, 6);
    putStaticEnemyAndImage(1, 6);
    putStaticEnemyAndImage(5, 2);
    putStaticEnemyAndImage(10, 3);
    putStaticEnemyAndImage(8, 1);
    putStaticEnemyAndImage(8, 5);
    putStaticEnemyAndImage(12, 1);
    putStaticEnemyAndImage(12, 5);
}

let level4VerticalEnemyCounter = 6;

function level4VerticalEnemies(){
    if (level4VerticalEnemyCounter < 6) {
        fullyClearChar(0, level4VerticalEnemyCounter);
        fullyClearChar(2, level4VerticalEnemyCounter);
        fullyClearChar(4, level4VerticalEnemyCounter);
        fullyClearChar(6, level4VerticalEnemyCounter);
        level4VerticalEnemyCounter++;
        if (palya[0][level4VerticalEnemyCounter] == mainCharacter || palya[2][level4VerticalEnemyCounter] == mainCharacter || palya[4][level4VerticalEnemyCounter] == mainCharacter || palya[6][level4VerticalEnemyCounter] == mainCharacter) {
            playerIsDed = 1;
        }
        putEnemyAndImage(0, level4VerticalEnemyCounter);
        putEnemyAndImage(2, level4VerticalEnemyCounter);
        putEnemyAndImage(4, level4VerticalEnemyCounter);
        putEnemyAndImage(6, level4VerticalEnemyCounter);
    } else {
        fullyClearChar(0, 12 - level4VerticalEnemyCounter);
        fullyClearChar(2, 12 - level4VerticalEnemyCounter);
        fullyClearChar(4, 12 - level4VerticalEnemyCounter);
        fullyClearChar(6, 12 - level4VerticalEnemyCounter);
        level4VerticalEnemyCounter++;
        if (palya[0][12 - level4VerticalEnemyCounter] == mainCharacter || palya[2][12 - level4VerticalEnemyCounter] == mainCharacter || palya[4][12 - level4VerticalEnemyCounter] == mainCharacter || palya[6][12 - level4VerticalEnemyCounter] == mainCharacter) {
            playerIsDed = 1;
        }
        putEnemyAndImage(0, 12 - level4VerticalEnemyCounter);
        putEnemyAndImage(2, 12 - level4VerticalEnemyCounter);
        putEnemyAndImage(4, 12 - level4VerticalEnemyCounter);
        putEnemyAndImage(6, 12 - level4VerticalEnemyCounter);
        if (level4VerticalEnemyCounter == 12){
            level4VerticalEnemyCounter = 0;
        }
    }
}

let level4HorizontalEnemyCounter = 0;

function level4HorizontalEnemies(){
    if (level4HorizontalEnemyCounter < 7) {
        fullyClearChar(7 + level4HorizontalEnemyCounter, 0);
        fullyClearChar(7 + level4HorizontalEnemyCounter, 2);
        fullyClearChar(7 + level4HorizontalEnemyCounter, 4);
        fullyClearChar(7 + level4HorizontalEnemyCounter, 6);
        level4HorizontalEnemyCounter++;
        if (palya[7 + level4HorizontalEnemyCounter][0] == mainCharacter || palya[7 + level4HorizontalEnemyCounter][2] == mainCharacter || palya[7 + level4HorizontalEnemyCounter][4] == mainCharacter || palya[7 + level4HorizontalEnemyCounter][6] == mainCharacter) {
            playerIsDed = 1;
        } else {
            putEnemyAndImage(7 + level4HorizontalEnemyCounter, 0);
            putEnemyAndImage(7 + level4HorizontalEnemyCounter, 2);
            putEnemyAndImage(7 + level4HorizontalEnemyCounter, 4);
            putEnemyAndImage(7 + level4HorizontalEnemyCounter, 6);
        }
    } else {
        fullyClearChar(21 - level4HorizontalEnemyCounter, 0);
        fullyClearChar(21 - level4HorizontalEnemyCounter, 2);
        fullyClearChar(21 - level4HorizontalEnemyCounter, 4);
        fullyClearChar(21 - level4HorizontalEnemyCounter, 6);
        level4HorizontalEnemyCounter++;
        if (palya[21 - level4HorizontalEnemyCounter][0] == mainCharacter || palya[21 - level4HorizontalEnemyCounter][2] == mainCharacter || palya[21 - level4HorizontalEnemyCounter][4] == mainCharacter || palya[21 - level4HorizontalEnemyCounter][6] == mainCharacter) {
            playerIsDed = 1;
        } else {
            putEnemyAndImage(21 - level4HorizontalEnemyCounter, 0);
            putEnemyAndImage(21 - level4HorizontalEnemyCounter, 2);
            putEnemyAndImage(21 - level4HorizontalEnemyCounter, 4);
            putEnemyAndImage(21 - level4HorizontalEnemyCounter, 6);
            if (level4HorizontalEnemyCounter == 14) {
                level4HorizontalEnemyCounter = 0;
            }
        }
    }
}

function clearChar(x, y) {
    ctx.fillStyle = "#A7F1CB";
    ctx.fillRect((x * size), (y * size), size, size);
}

function fullyClearChar(x, y) {
    ctx.fillStyle = "#A7F1CB";
    ctx.fillRect((x * size), (y * size), size, size);
    palya[x][y] = 0;
}

function levelOneBlocks() {
    for (i = 0; i < 7; i++){
        createWallandImage(1, i);
    }
    for (i = 1; i < 8; i++){
        createWallandImage(3, i);
    }
    for (i = 0; i < 7; i++){
        createWallandImage(5, i);
    }
    for (i = 1; i < 8; i++){
        createWallandImage(7, i);
    }
    for (i = 0; i < 7; i++){
        createWallandImage(9, i);
    }
    for (i = 1; i < 8; i++){
        createWallandImage(11, i);
    }
    for (i = 0; i < 6; i++){
        createWallandImage(13, i);
    }
    palya[13][6] = palyaKulcs;
    palya[14][0] = closedDoor;
}

function levelTwoBlocks() {
    for (i = 1; i < 8; i++) {
        createWallandImage(0, i);
    }
    for (i = 6; i < 8; i++) {
        createWallandImage(1, i);
    }
    for (i = 0; i < 8; i++) {
        if (i == 2 || i == 5) {
            continue;
        }
        createWallandImage(2, i);
        createWallandImage(3, i);
    }
    for (i = 1; i < 7; i++) {
        if (i == 5) {
            continue;
        }
        createWallandImage(5, i);
    }
    createWallandImage(6, 6);
    for (i = 1; i < 7; i++) {
        if (i == 2 || i == 3 || i == 4) {
            continue;
        }
        createWallandImage(7, i);
    }
    createWallandImage(8, 1);
    createWallandImage(8, 6);
    for (i = 1; i < 7; i++) {
        if (i == 5) {
            continue;
        }
        createWallandImage(9, i);
    }
    for (i = 0; i < 8; i++) {
        if (i == 4) {
            continue;
        }
        createWallandImage(11, i);
    }
    for (i = 1; i < 7; i++) {
        createWallandImage(13, i);
    }
    placeKey(7, 3);
    placeClosedDoor(14, 7);
}

function levelThreeBlocks() {
    for (i = 1; i < 8; i++) {
        createWallandImage(0, i);
    }
    for (i = 2; i < 14; i++) {
        createWallandImage(i, 0);
    }
    for (i = 1; i < 14; i++) {
        createWallandImage(i, 7);
    }
    for (i = 0; i < 6; i++) {
        createWallandImage(14, i);
    }
    palya[14][7] = openDoor;
    ctx.drawImage(openDoorImage, (size * 14), (size * 7), size, size);
    placeShield(7, 3);
    placeHeart(7, 4);
}

function levelFourBlocks() {
    for (i = 0; i < 14; i++) {
        for (j = 1; j < 8; j++) {
            if (i % 2 != 0 && j % 2 != 0) {
                createWallandImage(i, j);
            } else {
                continue;
            }
        }
    }
    placeKey(0, 7);
    placeClosedDoor(14, 7);
}

function levelColor(){
    ctx.fillStyle = "#A7F1CB";
    for (let i = 0; i < palya.length; i++) {
        for (let j = 0; j < palya[i].length; j++) {
            ctx.fillRect((size * i), (size * j), size, size);
        }
    }
}

window.setInterval(enemyMover, 250);

function enemyMover() {
    switch(levelNumber) {
        case 1:
            break;
        case 2:
            LevelTwoEnemy1Mover();
            LevelTwoEnemy2Mover();
            LevelTwoEnemy3Mover();
            LevelTwoEnemy4Mover();
            break;
        case 3:
            level3EnemyMover();
            break;
        case 4:
            level4HorizontalEnemies();
            level4VerticalEnemies();
            break;
    }
    if (playerIsDed == 1) {
        playerDeath();
    }
}

window.addEventListener("keyup", function (event){
    if (levelNumber == 9000) {
        return;
    }
    if (event.keyCode === 37 && x != 0 && checkField(x - 1, y) == true) {
        targetX = x - 1;
        targetY = y;
        characterMover();
    }
    else if (event.keyCode === 38 && y != 0 && checkField(x, y - 1) == true){
        targetX = x;
        targetY = y - 1;
        characterMover();
    }
    else if (event.keyCode === 39 && (x * size) < (canvas.width - size) && checkField(x + 1, y) == true) {
        targetX = x + 1;
        targetY = y;
        characterMover();
    }
    else if (event.keyCode === 40 && (y * size) < (canvas.height - size) && checkField(x, y + 1) == true) {
        targetX = x;
        targetY = y + 1;
        characterMover();
    } else {
        return;
    }
})

function characterMover() {
    fullyClearChar(x, y);
    if (palya[targetX][targetY] == palyaKulcs) {
        for (let i = 0; i < palya.length; i++) {
            for (let j = 0; j < palya[i].length; j++) {
                if (palya[i][j] == closedDoor) {
                    palya[i][j] = openDoor;
                    ctx.drawImage(openDoorImage, (size * i), (size * j), size, size);
                };
            }
        }
    }
    else if (palya[targetX][targetY] == openDoor) {
        switch(levelNumber) {
            case 1:
                LevelTwo();
                break;
            case 2:
                LevelThree();
                break;
            case 3:
                LevelFour();
                break;
            case 4:
                VictoryScreen();
                return;
            }
        targetX = x;
        targetY = y;
    }
    else if (palya[targetX][targetY] == actualEnemy) {
        if (shieldIsOn == 1) {
            shieldIsOn = 0;
            level3EnemyX = 100;
            level3EnemyY = 100;
        } else {
            playerDeath();
            targetX = x;
            targetY = y;
        }
    }
    else if (palya[targetX][targetY] == shield) {
        shieldIsOn = 1;
        console.log(shieldIsOn);
    }
    else if(palya[targetX][targetY] == extraLifePickup) {
        playerLives++;
        console.log(playerLives);
    }
    mainChar(targetX, targetY);
    x = targetX;
    y = targetY;
}


function playerDeath() {
    playerLives -= 1;
    playerIsDed = 0;
    if (playerLives == 0) {
        alert("Game over ye scrub, try again");
        playerLives = 3;
        level4VerticalEnemyCounter = 6;
        level4HorizontalEnemyCounter = 0;
        counter1 = 0;
        counter2 = 7;
        counter3 = 4;
        xCounter = 0;
        yCounter = 0;
        secondXcounter = 0;
        secondYcounter = 0;
        LevelOne();
    } else {
        switch(levelNumber) {
            case 2:
                counter1 = 0;
                counter2 = 7;
                counter3 = 4;
                xCounter = 0;
                yCounter = 0;
                secondXcounter = 0;
                secondYcounter = 0;
                LevelTwo();
                break;
            case 3:
                LevelThree();
                break;
            case 4:
                level4VerticalEnemyCounter = 6;
                level4HorizontalEnemyCounter = 0;
                LevelFour();
                break;
            }
        }
    }
function checkField(a, b) {
    if (palya[a][b] == 0 || palya[a][b] == palyaKulcs || palya[a][b] == openDoor || palya[a][b] == actualEnemy || palya[a][b] == shield || palya[a][b] == extraLifePickup) {
        return true;
    }
    return false;
}

function game (){
    LevelOne();
}