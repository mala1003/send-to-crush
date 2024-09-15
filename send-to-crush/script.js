const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "htni nhbkkkkk yee rouhyyy w hyetii w 3ineye w 3omrii w mleyktii w princestiii w mrytii w gamrtii w chmsiii ett batmantiii w deloultiii w blwtiiii w hayewniii l2eliffff yee 9atoustiii w 8zeltiii w arnoubtiiii yee rouhh filkk yee frhtiii w dhktnii w most9bliii w dweye w nawartiii w nejmtiii nmouttt 3likk yee li mhbltnii w m5dhtlii 39lii w 9lbii w kol chy fiyee yee om wledii e7em hhh yee chrekitt 7yetii yee lbara2aa w zinn bkolou yee 2mll mt3iii lwhid na3ch9kk yee hobii w lhob bkolou yee 7olmii yee ahlee haje sartlii fi hyetiii yee kenzii w n3mtii w nourrr dnytiii yee 9lbiii w a8lee mee 3ndii ett mt3ii whdii yee fatoumtiii
 😘 ";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExanU0cnF2MWNlYXJ2cWtkdjNxdnZzeHZrcmV4d2sxMXdlNmUxNTZ3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
