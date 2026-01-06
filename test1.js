<script>
/*
  ****  Used in 2026-Trims-Bronco.htmls

  This script is for changing the image based on trim, doors, and color selection and Matte.

  imgSwitch is the landing pad for all of the parameters to be processed, and all subsequent changes run after it.

  All other procedures should end up calling imgSwitch with the appropriate URL.

  handleDoors processes the number of doors on the vehicle and sends the corrected url to imgSwitch.
  
*/

// getImageID - Pull the image ID from the div
function getImageID() {
  let arrDivImgList = getImageArr();
  // Pull the ID of the second element in the array and strip off the last character
  let origId = arrDivImgList[1].getAttribute("id");
  // Check the ID for debugging
  console.log(`getImageID: origId = ${origId}`);
  return origId;
}

// getImageURL - Pull the image URL from the div
function getImageURL() {
  let imgID = getImageID();
  //let imgID = getImageID();
  let url = document.getElementById(imgID).style.backgroundImage.slice(4, -1).replace(/"/g, "");
  console.log(`getImageURL: url = ${url}`);
  return url;
}

// getImageColor - Pull the image color from the URL
function getImageColor(color) {
  let imgURL = getImageURL();
  console.log(`getImageColor: imgURL = ${imgURL}`);
  let arrFile = makeArrayFromFile(imgURL);
  let origColor = arrFile[3];
  console.log(`getImageColor: origColor = ${origColor}`);
  if (color === origColor) {
    return imgURL;
  }
  // if subfolder then change to arrFile[3]
  arrFile[2] = color;
  let url = concatArray(arrFile);
  console.log(`getImageColor: url = ${url}`);
  imgSwitch(url);
}

// imgSwitch - Switch the image based on url
function imgSwitch(url) {
  console.log(`Entered imgSwitch(url = ${url})`);
  let div = getImageID();
  // Change the image
  document.getElementById(div).style.backgroundImage = "url(" + url + ")";
}

function getImageArr() {
  // Store all divs with role="img"
  let strDivImgList = document.querySelectorAll('div[role="img"]');
  // Create array of only visible div elements with role="img"
  let arrDivImgList = Array.from(strDivImgList).filter((element) => {
    return element.checkVisibility();
  });
  // Print the array for debugging
  printArray(arrDivImgList, "arrDrvImgList");
  return arrDivImgList;
}

// handleMatte - Handle the matte option
function handleMatte(src) {
  console.log(`Entered handleMatte: src.name = ${src.name}`);
  // Check to see if the matte option has been marked
  let isChecked = document.querySelectorAll('input[name="' + src.name + '"]');
  //console.log(document.querySelectorAll('input[name="' + src.name + '"]'));
  // get the current image URL
  let imgID = getImageID();
  let oldURL = document.getElementById(imgID).style.backgroundImage.slice(4, -1).replace(/"/g, "");
  console.log(`handleMatte: oldURL = ${oldURL}`);
  // if it has, then we need to check the length of the arrFileURL array and see if Matte needs to be added, else removed
  console.log(isChecked[0].checked === true);
  if (isChecked[0].checked === true) {
    if (oldURL.includes("2_Door") === true) {
      imgSwitch(oldURL);
      alert("Matte not available in 2-Door configurations");
      isChecked[0].checked = false;
      return;
    }
    newURL = oldURL.replace(/(\.png)/g, ".Matte.png");
  } else {
    newURL = oldURL.replace(/(\.Matte.png)/g, ".png");
  }
  imgSwitch(newURL);
}

// handleDoors - Handle the doors option
function handleDoors(src) {
  console.log(`Entered handleDoors(src.value = ${src.value})`);
  let imgID = getImageID();
  let oldURL = document.getElementById(imgID).style.backgroundImage.slice(4, -1).replace(/"/g, "");
  //console.log(`handleDoors: oldURL = ${oldURL}`);
  //console.log(`handleDoors: urlContainsMatte = ${oldURL.includes("Matte")}`);
  // Check to see if oldURL contains 2_Door and Matte
  //console.log(`handleDoors: urlContains2DoorAndMatte = ${oldURL.includes("2_Door") && oldURL.includes("Matte")}`);
  if (oldURL.includes("Max") && src.value === "Regular") {
    oldURL = oldURL.replace(/(Max)/g, src.value);
    if (oldURL.includes("Matte")) {
      //alert("Matte not available in 2-Door configurations");
      oldURL = oldURL.replace(/(\.Matte.png)/g, ".png");
      // Uncheck the matte option
      //console.log(`handleDoors: imgID = ${imgID.slice(0, -1)}`);
      let isChecked = document.querySelectorAll('input[name="optMatte' + imgID.slice(0, -1) + '"]');
      //console.log(`handleDoors: try and see value of option: ${isChecked[0].checked}`);
      isChecked[0].checked = false;

      //console.log(`handleDoors: try and see value of option: ${isChecked[0].checked}`);
      imgSwitch(oldURL);
    }
  } else if (oldURL.includes("Regular") && src.value === "Max") {
    oldURL = oldURL.replace(/(Regular)/g, src.value);
  }

  //console.log(`handleDoors: newURLFile = ${oldURL}`);
  imgSwitch(oldURL);
}

function makeArrayFromFile(oldURL) {
  let arrFile = oldURL.split(".");
  printArray(arrFile, "arrFile");
  return arrFile;
}

function makeArrayFromFolder(oldURL) {
  let arrFolder = oldURL.split("/");
  //printArray(arrFolder, "arrFolder");
  return arrFolder;
}

// printArray - Print the contents of the array
function printArray(arr, arrName) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arrName}[${i}] = ${arr[i]}`);
  }
}

// concatArray - Concatenate the array into a string
function concatArray(arr) {
  console.log("Entered concatArray");
  //printArray(arr, "arr in conncatArray");
  let strArr = "";
  let strDivider = ".";

  for (let i = 0; i < arr.length; i++) {
    strArr = strArr + arr[i];
    if (i !== arr.length - 1) {
      strArr = strArr + strDivider;
    }
  }
  //console.log(`concatArray: strArr = ${strArr}`);
  return strArr;
}

</script>