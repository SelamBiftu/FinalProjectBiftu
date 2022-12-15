const myVideo = document.querySelector("video");
myVideo.onclick = () => {
  const mySrc = myVideo.getAttribute("src");
  if (mySrc === "lexusRXCopper.mp4") {
    myVideo.setAttribute("src", "rz-video.mp4");
  } else {
    myVideo.setAttribute("src", "lexusRXCopper.mp4");
  }
};
let myButton = document.querySelector('.gift');
let myHeading = document.querySelector('.brand');
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello,${myName}. Enjoy your Lexus free ride!`;
  }
}
myButton.onclick = () => {
  setUserName();
};