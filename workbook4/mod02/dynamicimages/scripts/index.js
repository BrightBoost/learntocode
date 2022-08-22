let imageFiles = [
  { name: "Coffee", description: "Liquid hugs" },
  { name: "Tea", description: "Nice cup of tea" },
];

window.onload = function () {
  const addImageBtn = document.getElementById("addImage");
  const clearImageBtn = document.getElementById("clearImage");

  addImageBtn.onclick = onAddImage;
  clearImageBtn.onclick = onClearImage;

  initSelectImages();
};

function initSelectImages() {
  const imagePicker = document.getElementById("imagePicker");

  let lengthImageFiles = imageFiles.length;
  for (let i = 0; i < lengthImageFiles; i++) {
    let option = new Option(
      imageFiles[i].description,
      imageFiles[i].name.toLowerCase()
    );
    imagePicker.appendChild(option);
  }
}

function onAddImage() {
  const imagePicker = document.getElementById("imagePicker");
  const imageDiv = document.getElementById("image");
  let img = document.createElement("img");
  img.width = 300;
  img.src = `./images/${imagePicker.value}.jpeg`;
  img.alt = imagePicker.options[imagePicker.selectedIndex].text;

  //alternatively with find and value being able to description
  // let imageFile = imageFiles.find(image => imagePicker.value == image.description);
  // let fileName = `./images/${imageFile.name.toLowerCase()}.jpeg`;
  
  imageDiv.appendChild(img);
}

function onClearImage() {
  const imageDiv = document.getElementById("image");
  imageDiv.innerHTML = "";
}
