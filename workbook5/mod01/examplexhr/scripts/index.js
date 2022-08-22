window.onload = function () {
  const findPostButton = document.getElementById("findPost");
  findPostButton.onclick = onClickPostButton;
};

function onClickPostButton() {
  // create url
  let postId = document.getElementById("postId").value;
  let url = "https://jsonplaceholder.typicode.com/posts/" + postId;
  console.log(url);

  // create xhr
  let xhr = new XMLHttpRequest();

  // onreadystatechange function
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const postData = document.getElementById("postData");
      let post = JSON.parse(this.responseText);
      postData.innerHTML = post.body;
    }
  };

  // open
  xhr.open("GET", url);

  //send
  xhr.send(null);
}
