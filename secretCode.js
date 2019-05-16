const pressedKeys = [];
const sharkPassword = "shark";
const unicornPassword = "unicorn";
const hasselhoffPassword = "specialone";

function passwordSplicer(password) {
  pressedKeys.splice(
    -password.length - 1,
    pressedKeys.length - password.length
  );
}

window.addEventListener("keyup", e => {
  //console.log(e.key);
  pressedKeys.push(e.key);
  pressedKeys.splice(
    -hasselhoffPassword.length - 1,
    pressedKeys.length - hasselhoffPassword.length
  );

  if (pressedKeys.join("").includes(sharkPassword)) {
    passwordSplicer(sharkPassword);
    console.log("SHARKS!!!");
  } else if (pressedKeys.join("").includes(unicornPassword)) {
    passwordSplicer(unicornPassword);
    console.log("UNICORN!!!");
  } else if (pressedKeys.join("").includes(hasselhoffPassword)) {
    passwordSplicer(hasselhoffPassword);
    console.log("DAVID!!!");
  }
});
