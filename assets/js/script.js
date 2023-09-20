"use strict";

// let formElem = document.getElementById("product-create");

// formElem.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("dshf");
// });

let fileInput = document.querySelector(".file-input");
let tableBody = document.querySelector(".table-area .table tbody");
let table = document.querySelector(".table-area");
let alertFile = document.querySelector(".file-alert");
let clearBtn = document.querySelector(".btn");

let uploadIcon = document.querySelector(".icon i");

uploadIcon.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function (e) {
  // console.log(e.target.files);

  for (const file of e.target.files) {
    // console.log(file);
    // console.log(file.name);

    let fileReader = new FileReader();

    fileReader.onloadend = (e) => {
      // console.log(e.currentTarget.result);

      let base64Img = e.currentTarget.result;

      tableBody.innerHTML += `<tr>
      <td><img src="${base64Img}" alt="">
      </td>
      <td>${file.name}</td>
      <td>${file.size / 1024} kb</td>
    </tr>`;
    };

    fileReader.readAsDataURL(file);
  }

  alertFile.classList.add("d-none");
  table.classList.remove("d-none");
  clearBtn.classList.remove("d-none");
});

clearBtn.addEventListener("click", function () {
  tableBody.innerHTML = "";
  table.classList.add("d-none");
  clearBtn.classList.add("d-none");
  alertFile.classList.remove("d-none");

  fileInput.value = "";
});

document
  .querySelector(".datetime-input")
  .addEventListener("change", function (e) {
    // console.log(e.target.value);

    let data = new Date(e.target.value);

    console.log(typeof data);
  });
