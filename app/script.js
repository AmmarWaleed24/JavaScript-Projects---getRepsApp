const url = "https://api.github.com/users/elzerowebschool/repos";
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let req = new XMLHttpRequest();
  req.open("GET", url);
  req.send();

  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      let jsObj = JSON.parse(this.responseText);
      for (let i = 0; i < jsObj.length; i++) {
        let div = document.createElement("div");
        div.innerText = jsObj[i].full_name;
        document.body.appendChild(div);
      }
    }
  };
});
