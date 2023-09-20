"use strict";

let dropElem = document.getElementById("drop");
let tableBody = document.querySelector(".table-area .table tbody");
let table = document.querySelector(".table-area");
let dropContent = document.querySelector(".drop-content");

dropElem.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropElem.addEventListener("drop", function (e) {
  e.preventDefault();

  for (const file of e.dataTransfer.files) {
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      //   console.log(e.currentTarget.result);

      let base64Img = e.currentTarget.result;

      tableBody.innerHTML += `<tr>
        <td><img src="${base64Img}" alt="">
        </td>
        <td>${file.name}</td>
        <td>${file.size / 1024} kb</td>
      </tr>`;
      dropElem.innerHTML += `<img src="${base64Img}" alt="">`;
    };

    fileReader.readAsDataURL(file);
  }

  table.classList.remove("d-none");
  dropContent.classList.add("d-none");
});
