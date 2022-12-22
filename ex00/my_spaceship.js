
function my_spaceship(str) {

    //rocket What the beginning coordinates and direction
    let x = 0;
    let y = 0;
    let direction = "up";
    let turn;
    for (let i = 0; i < str.length; i++) {
      turn = str[i];
      if (turn == "R") {
        if (direction == "up") {
          direction = "right";
        } else if (direction == "right") {
          direction = "down";
        } else if (direction == "down") {
          direction = "left";
        } else if (direction == "left") {
          direction = "up";
        }
      }
      else if (turn == "L") {
        if (direction == "up") {
          direction = "left";
        } else if (direction == "left") {
          direction = "down";
        } else if (direction == "down") {
          direction = "right";
        } else if (direction == "right") {
          direction = "up";
        }
      }
      else if (turn == "A") {

        if (direction == "up") {
          y--;
        }
        else if (direction == "right") {
          x++;
        }
        else if (direction == "down") {
          y++;
        }
        else if (direction == "left") {
          x--;
        }
      }
    }
    //"{x: X, y: Y, direction: 'DIRECTION'}"
    //str = 'Hello' + ' ' + 'World';
    let spaceman = '{x: ' + x + ', ' + 'y: ' + y + ', ' + 'direction: ' + "'" + direction + "'}"
    return spaceman;
  }
  //console.log(my_spaceship("RAALALL"));
  //console.log(my_spaceship("AAAA"));
  //console.log(my_spaceship("RAARA"));
  //console.log(my_spaceship(""));