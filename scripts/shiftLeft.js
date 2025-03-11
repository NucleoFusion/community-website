function shiftLeft() {
  const nodes = {
    projectLeft: document.querySelector("#project-left"),
    projectActive: document.querySelector("#project-active"),
    projectRight: document.querySelector("#project-right"),
  }

  fadeOutLeft(nodes)
  slideLeft(nodes)
  fadeInLeft(nodes)
}

function fadeOutLeft(nodes) {
  const div = nodes.projectActive.children[0];

  let leftMargin = 0;
  let opacity = 1;

  const mainloop = setInterval(function() {
    div.style.opacity = opacity;
    div.style.marginLeft = `${leftMargin}vw`;

    opacity -= 0.035;
    leftMargin -= 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.opacity = 1;
    div.style.marginLeft = `0vw`;

    nodes.projectLeft.appendChild(div)
  }, 301)
}

function slideLeft(nodes) {
  const div = nodes.projectActive.lastElementChild;

  let leftMargin = 0;

  const mainloop = setInterval(function() {
    div.style.marginLeft = `${leftMargin}vw`;

    leftMargin -= 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.marginLeft = `0vw`;
  }, 301)
}

function fadeInLeft(nodes) {
  const div = nodes.projectRight.children[0];

  let leftMargin = 0;
  let opacity = 0;

  div.style.visibility = "visible";

  const mainloop = setInterval(function() {
    div.style.opacity = opacity;
    div.style.marginLeft = `${leftMargin}vw`;

    opacity += 0.035;
    leftMargin -= 1;
  }, 10)

  setTimeout(() => {
    clearInterval(mainloop)

    //Resetting Styles
    div.style.opacity = 1;
    div.style.marginLeft = `0vw`;
    div.style.visibility = "";

    nodes.projectRight.appendChild(nodes.projectLeft.children[0])
    nodes.projectActive.appendChild(div)
  }, 301)
}
