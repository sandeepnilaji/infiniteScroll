// const container = document.getElementById("container");
// //const URL = `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=yellow&image_type=photo&pretty=true&per_page=`;
// function getRandom() {
//   return Math.floor(Math.random() * 20);
// }

// async function show() {
//   //   let i = 0;
//   //   while (i < numImages) {
//   let res = await fetch(
//     `https://pixabay.com/api/?key=24387257-d23fa59c127d4896f1bebb1b3&q=yellow+cars&image_type=photo&pretty=true&per_page=${getRandom()}`
//   );
//   var data = await res.json();
//   let s = data.hits;
//   show_item(s);
//   console.log(s);

//   //   }
//   // console.log(s[0].user_id);
//   //   show_item(data.hits);
// }
// show();
// function show_item(d) {
//   var show1 = document.getElementById("container");
//   show1.innerHTML = null;
//   d.forEach((el) => {
//     let div1 = document.createElement("div");
//     let img = document.createElement("img");
//     img.src = el.previewURL;
//     div1.append(img);
//     show1.append(div1);
//   });
// }

// container.addEventListener("scroll", () => {
//   //   if (
//   //     container.scrollY + container.innerHeight >=
//   //     document.documentElement.scrollHeight
//   //   ) {
//   show();
//   //   console.log(container);
//   //   }
// });
var container = document.getElementById("container");
let j = 1;
function loacontent(num = 10) {
  let i = 0;
  while (i < num) {
    const div = document.createElement("div");
    div.innerText = `masai student ${j}`;
    div.style.fontSize = "100px";
    container.append(div);
    i++;
    j++;
  }
}
loacontent();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loacontent();
  }
});
