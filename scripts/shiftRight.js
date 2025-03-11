function shiftRight() {
  const nodes = {
    projectLeft: document.querySelector("#project-left"),
    projectActive: document.querySelector("#project-active"),
    projectRight: document.querySelector("#project-right"),
  }

  fadeOutRight(nodes)
  slideRight(nodes)
  fadeInRight(nodes)

  Object.values(nodes).forEach(element => {
    console.log(element.children)
  });
}

function fadeOutRight(nodes) {
  const div = nodes.projectActive.lastElementChild;

  let leftMargin = 0;
  let opacity = 1;

  const mainloop = setInterval(function() {
    div.style.opacity = opacity;
    div.style.marginLeft = `${leftMargin}vw`;

    opacity -= 0.035;
    leftMargin += 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.opacity = 1;
    div.style.marginLeft = `0vw`;

    nodes.projectRight.insertBefore(div, nodes.projectRight.children[0])
  }, 301)
}

function slideRight(nodes) {
  const div = nodes.projectActive.children[0];

  let leftMargin = 0;

  const mainloop = setInterval(function() {
    div.style.marginLeft = `${leftMargin}vw`;

    leftMargin += 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.marginLeft = `0vw`;
  }, 301)
}

function fadeInRight(nodes) {
  const div = nodes.projectRight.lastElementChild;

  let leftMargin = 0;
  let opacity = 0;

  div.style.visibility = "visible";

  const mainloop = setInterval(function() {
    div.style.opacity = opacity;
    div.style.marginLeft = `${leftMargin}vw`;

    opacity += 0.035;
    leftMargin += 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.opacity = 1;
    div.style.marginLeft = `0vw`;
    div.style.visibility = "";

    nodes.projectLeft.insertBefore(nodes.projectRight.lastElementChild, nodes.projectLeft.children[0])
    nodes.projectActive.insertBefore(div, nodes.projectActive.children[0])
  }, 301)
}
