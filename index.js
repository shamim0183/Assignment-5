
function getElementById(id) {
  return document.getElementById(id);
}
function getElementsByClassName(className) {
  return document.getElementsByClassName(className);
}
const vectorHeart = getElementsByClassName("vectorHeart");
Array.from(vectorHeart).forEach(function (element) {
  element.addEventListener("click", function () {
    getElementById("heart-count").textContent++;
  });
});

const coinCount = getElementById("coin-count");
const copyCount = getElementById("copy-count");
const dynamicDiv = document.querySelector(".dynamic");

const callBtn = getElementsByClassName("call-btn");
const copyBtn = getElementsByClassName("copy-btn");
const clearBtn = getElementById("clear-btn");

Array.from(callBtn).forEach(function (element) {
  const serviceTitle = element.parentNode.parentNode.querySelector("h2").textContent;
  const serviceName = element.parentNode.parentNode.querySelector("p").textContent;
  const phoneNumber = element.parentNode.parentNode.querySelector("h3").textContent;
  element.addEventListener("click", function () {
    alert(`Calling ${serviceTitle} ${phoneNumber}`);
    coinCount.textContent -= 20;
    if (coinCount.textContent < 0) {
      alert("You don't have enough coins");
      coinCount.textContent = 0;
      return;
    }
    
    console.log(phoneNumber);
    const currentTime = new Date().toLocaleTimeString();
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="p-4 bg-[#FAFAFA] rounded-[8px] flex justify-between items-center mb-2">
      <div class="">
          <h2 class="font-hind font-semibold text-[18px]">${serviceTitle}</h2>
          <p class="font-roboto text-[18px] text-[#5C5C5C] mb-6">${phoneNumber}</p>
      </div>
      <p class="font-roboto text-[16px] text-black mb-6">${currentTime}</p>
    </div>
    `;
    dynamicDiv.appendChild(newDiv);
  });
});

Array.from(copyBtn).forEach(function (element) {
  element.addEventListener("click", function () {
    const phoneNumber = element.parentNode.parentNode.querySelector("h3").textContent;
    alert(`${phoneNumber} number copied to clipboard`);
    copyCount.textContent++;
    navigator.clipboard.writeText(phoneNumber);
  });
});

clearBtn.addEventListener("click", function () {
  dynamicDiv.innerHTML = "";
});
