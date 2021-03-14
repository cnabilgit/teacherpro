window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("d-none");
  }, 1000);

  // setInterval(() => {
  //   document.querySelectorAll(".screenshot").forEach((el, index) => {
  //     el.classList.add("opacity-4");
  //     if (index == 3) {
  //       el.classList.remove("opacity-4");
  //       el.classList.add("opacity-5");
  //       console.log(index);
  //     }
  //   });
  // }, 0);
});
