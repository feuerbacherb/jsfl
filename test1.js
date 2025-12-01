<script>
  function imgSwitch(i, j, k) {
   	/*
    	i === pictureID
        j === html to color
        k === numDoors
    */
    
    console.log(`Entered imgSwitch(id = ${i}, html = ${j}, Doors = ${k}) `);
    
    let div1 = i + '1';
    let div2 = i + '2';
    let strURL = "";
    
    // Pull the URL portion we need and store in strOldImageURL
    let strOldImageURL = document.getElementById(div1).style.backgroundImage.slice(4, -1).replace(/["'"]/g, "");
    console.log(`strOldImageURL = ${strOldImageURL}`);
    
    // Split the filename of the URL apart on "." so we can replace things
    let arrOldImageURL = strOldImageURL.split(".");
    printArray(arrOldImageURL, "arrOldImageURL");
    
    // Split the folders of the URL apart on "/" so we can replace things
    let arrOldFolderURL = arrOldImageURL[0].split("/");
    printArray(arrOldFolderURL, "arrOldFolderURL");
    
    // Replace the array elements for doors ALWAYS
    let newDoors = k;
    arrOldImageURL[2] = newDoors;
    arrOldFolderURL[7] = newDoors;
    
    // Rebuild arrays into a string for URL
    let strNewFolderURL = concatArray(arrOldFolderURL);
    console.log(`strNewFolderURL = ${strNewFolderURL}`);
    let strNewImageURL = concatArray(arrOldImageURL);
    console.log(`strNewImageURL = ${strNewImageURL}`);
    let strURL = strNewFolderURL + strNewImageURL;
    console.log(`strURL = ${strURL}`);
  }
  
  
  
  function imgSwitch(id, color, cat) {
    console.log(`Entered imgSwitch(id = ${id}, color = ${color}, cat = ${cat})`);
    let div1 = id + "1";
    let div2 = id + "2";
    let strURL = "";

    let strBI = document.getElementById(div1).style.backgroundImage.slice(4, -1).replace(/["'"]/g, "");
    console.log(`strBI = ${strBI}`);
    let arrBI = strBI.split(".");
    printArray(arrBI);

    let arrModel = arrBI[1].split("_");
    printArray(arrModel);

    if (cat === "Null") {
      arrBI = trimArray(arrBI);
      arrBI[3] = color;
      arrBI[4] = "Null";
      strURL = concatArray(arrBI);
      console.log(`strURL = ${strURL}`);
    } else {
      arrCat = cat.split(".");
      arrBI = trimArray(arrBI);
      printArray(arrCat);
      if (arrCat.length > 2) {
        arrBI[4] = arrCat[1] + "." + arrCat[2];
      } else {
        arrBI[4] = arrCat[1];
      }
      //arrBI[4] = cat;
      printArray(arrBI);
      strURL = concatArray(arrBI);
    }
    console.log(strURL);
    console.log(arrModel.length);
    switch (arrModel.length) {
      case 4:
        arrModel[2] = arrModel[2] + "_" + arrModel[3];
        break;
      case 5:
        arrModel[2] = arrModel[2] + "_" + arrModel[3] + "_" + arrModel[4];
        break;
      default:
        break;
    }
    console.log(`arrModel[2] = ${arrModel[2]}`);

    switch (arrModel[2]) {
      case "EcoBoost":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("OTSGGRR").style.visibility = "visible";
                document.getElementById("OTSMBRAR").style.visibility = "visible";
                document.getElementById("OTSOFS").style.visibility = "hidden";
                document.getElementById("HSSB").style.visibility = "hidden";
                document.getElementById("HSSG").style.visibility = "visible";
                break;
              case "Race_Red":
              case "Molten_Magenta_Metallic_Tri-coat":
                document.getElementById("OTSGGRR").style.visibility = "visible";
                document.getElementById("OTSMBRAR").style.visibility = "hidden";
                document.getElementById("OTSOFS").style.visibility = "visible";
                document.getElementById("HSSB").style.visibility = "visible";
                document.getElementById("HSSG").style.visibility = "hidden";
                break;
              default:
                document.getElementById("OTSGGRR").style.visibility = "visible";
                document.getElementById("OTSMBRAR").style.visibility = "visible";
                document.getElementById("OTSOFS").style.visibility = "visible";
                document.getElementById("HSSB").style.visibility = "visible";
                document.getElementById("HSSG").style.visibility = "hidden";
            }
            break;
          case "Convertible":
            {
              switch (arrBI[3]) {
                case "Shadow_Black":
                  document.getElementById("HSSECB").style.visibility = "hidden";
                  document.getElementById("HSSECG").style.visibility = "visible";
                  break;
                default:
                  document.getElementById("HSSECB").style.visibility = "visible";
                  document.getElementById("HSSECG").style.visibility = "hidden";
                  break;
              }
            }
            break;
        }
        break;
      case "EcoBoost_Premium":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("EBPFOTSOFS").style.visibility = "hidden";
                document.getElementById("EBPFHSSB").style.visibility = "hidden";
                document.getElementById("EBPFHSSG").style.visibility = "visible";
                break;
              case "Molten_Magenta_Metallic_Tri-coat":
              case "Race_Red":
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("EBPFOTSOFS").style.visibility = "visible";
                document.getElementById("EBPFHSSB").style.visibility = "visible";
                document.getElementById("EBPFHSSG").style.visibility = "hidden";
                break;
              default:
                console.log(document.getElementById(arrBI[3]));
                document.getElementById("EBPFOTSGGRR").style.visibility = "visible";
                document.getElementById("EBPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("EBPFOTSOFS").style.visibility = "visible";
                document.getElementById("EBPFHSSB").style.visibility = "visible";
                document.getElementById("EBPFHSSG").style.visibility = "hidden";
                break;
            }
            break;
          case "Convertible":
            console.log(`Entered ${arrModel[2]}/${arrBI[2]}`);
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("EBPCHSSB").style.visibility = "hidden";
                document.getElementById("EBPCHSSG").style.visibility = "visible";
                break;
              default:
                document.getElementById("EBPCHSSB").style.visibility = "visible";
                document.getElementById("EBPCHSSG").style.visibility = "hidden";
                break;
            }
            break;
        }
        break;
      case "GT":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("GTFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTFOTSOFS").style.visibility = "hidden";
                break;
              case "Race_Red":
              case "Molten_Magenta_Metallic_Tri-coat":
                document.getElementById("GTFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("GTFOTSOFS").style.visibility = "visible";
                break;
              default:
                document.getElementById("GTFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTFOTSOFS").style.visibility = "visible";
                break;
            }
            break;
        }
        break;
      case "GT_Premium":
        console.log("GT Premium case");
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Wimbledon_White":
                document.getElementById("GTPFOTSGGRR").style.visibility = "hidden";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("GTPFOTSOFS").style.visibility = "hidden";
                document.getElementById("GTPFHSSS").style.visibility = "visible";
                document.getElementById("GTPFHSSR").style.visibility = "visible";
                document.getElementById("GTPFHSSC").style.visibility = "hidden";
                break;
              case "Race_Red":
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("GTPFOTSOFS").style.visibility = "visible";
                document.getElementById("GTPFHSSS").style.visibility = "visible";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "hidden";
                break;
              case "Intense_Lime_Yellow_Metallic":
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTPFOTSOFS").style.visibility = "visible";
                document.getElementById("GTPFHSSS").style.visibility = "hidden";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "hidden";
                break;
              case "Shadow_Black":
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTPFOTSOFS").style.visibility = "hidden";
                document.getElementById("GTPFHSSS").style.visibility = "hidden";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "visible";
                break;
              case "Molten_Magenta_Metallic_Tri-coat":
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "hidden";
                document.getElementById("GTPFOTSOFS").style.visibility = "visible";
                document.getElementById("GTPFHSSS").style.visibility = "hidden";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "hidden";
                break;
              case "Vapor_Blue_Metallic":
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTPFOTSOFS").style.visibility = "visible";
                document.getElementById("GTPFHSSS").style.visibility = "visible";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "hidden";
                break;
              default:
                document.getElementById("GTPFOTSGGRR").style.visibility = "visible";
                document.getElementById("GTPFOTSMBRAR").style.visibility = "visible";
                document.getElementById("GTPFOTSOFS").style.visibility = "visible";
                document.getElementById("GTPFHSSS").style.visibility = "hidden";
                document.getElementById("GTPFHSSR").style.visibility = "hidden";
                document.getElementById("GTPFHSSC").style.visibility = "visible";
                break;
            }
            break;
          case "Convertible":
            switch (arrBI[3]) {
              case "Wimbledon_White":
                document.getElementById("GTPCHSSS").style.visibility = "visible";
                document.getElementById("GTPCHSSR").style.visibility = "visible";
                document.getElementById("GTPCHSSC").style.visibility = "hidden";
                break;
              case "Race_Red":
                document.getElementById("GTPCHSSS").style.visibility = "visible";
                document.getElementById("GTPCHSSR").style.visibility = "hidden";
                document.getElementById("GTPCHSSC").style.visibility = "hidden";
                break;
              case "Molten_Magenta_Metallic_Tri-coat":
              case "Intense_Lime_Yellow_Metallic":
                document.getElementById("GTPCHSSS").style.visibility = "hidden";
                document.getElementById("GTPCHSSR").style.visibility = "hidden";
                document.getElementById("GTPCHSSC").style.visibility = "hidden";
                break;
              default:
                document.getElementById("GTPCHSSS").style.visibility = "hidden";
                document.getElementById("GTPCHSSR").style.visibility = "hidden";
                document.getElementById("GTPCHSSC").style.visibility = "visible";
                break;
            }
            break;
        }
        break;
      case "Dark_Horse":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("DHFPRSTDHG").style.visibility = "hidden";
                document.getElementById("DHFPRSTDLGB").style.visibility = "visible";
                document.getElementById("DHFHSSC").style.visibility = "visible";
                break;
              default:
                document.getElementById("DHFPRSTDHG").style.visibility = "visible";
                document.getElementById("DHFPRSTDLGB").style.visibility = "hidden";
                document.getElementById("DHFHSSC").style.visibility = "visible";
                break;
            }
            break;
        }
        break;
      case "Dark_Horse_Premium":
        switch (arrBI[2]) {
          case "Fastback":
            switch (arrBI[3]) {
              case "Shadow_Black":
                document.getElementById("DHPFPRSTDHG").style.visibility = "hidden";
                document.getElementById("DHPFPRSTDLGB").style.visibility = "visible";
                document.getElementById("DHPFHSSC").style.visibility = "hidden";
                document.getElementById("DHPFGBPTDAA").style.visibility = "visible";
                document.getElementById("DHPFTDLGGBPHS").style.visibility = "visible";
                break;
              case "Blue_Ember_Metallic":
              case "Vapor_Blue_Metallic":
                document.getElementById("DHPFPRSTDHG").style.visibility = "visible";
                document.getElementById("DHPFPRSTDLGB").style.visibility = "hidden";
                document.getElementById("DHPFHSSC").style.visibility = "hidden";
                document.getElementById("DHPFGBPTDAA").style.visibility = "visible";
                document.getElementById("DHPFTDLGGBPHS").style.visibility = "hidden";
                break;
              default:
                document.getElementById("DHPFPRSTDHG").style.visibility = "visible";
                document.getElementById("DHPFPRSTDLGB").style.visibility = "hidden";
                document.getElementById("DHPFHSSC").style.visibility = "visible";
                document.getElementById("DHPFGBPTDAA").style.visibility = "hidden";
                document.getElementById("DHPFTDLGGBPHS").style.visibility = "hidden";
                break;
            }
            break;
        }
        break;
      default:
        console.log("It fell through all the way");
    }

    document.getElementById(div1).style.backgroundImage = "url(" + strURL + ")";
    document.getElementById(div2).style.backgroundImage = "url(" + strURL + ")";
  }

  function trimArray(arr) {
    if (arr.length > 6) {
      arr.length = 5;
      arr[4] = "Null";
      arr[5] = "png";
    }
    return arr;
  }


  function concatArray(arr) {
    let strArr = "";
    let strDivider = "/";
    console.log(arr[1]);
    if (arr[1] <> "static") {
    //  strDivider = "."; 
      strDivider = "/";
    }
    
    for (let i = 0; i < arr.length; i++) {
      strArr = strArr + arr[i];
      if (i !== arr.length - 1) {        
        strArr = strArr + strDivider;
      }
    }
    return strArr;
  }


  function concatArray(arr) {
    let strArr = "";
    for (let i = 0; i < arr.length; i++) {
      strArr = strArr + arr[i];
      if (i !== arr.length - 1) {
        strArr = strArr + ".";
      }
    }
    return strArr;
  }

  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`arrBI[${i}] = ${arr[i]}`);
    }
  }

  function postURL(pers, str) {
    let periodCount = 0;
    let position = -1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "/") {
        periodCount++;
        if (periodCount === pers) {
          position = i;
          break;
        }
      }
    }

    if (position !== -1) {
      return str.substring(position);
    } else {
      return "The string is not a URL";
    }
  }

  function initURL(pers, str) {
    let periodCount = 0;
    let position = -1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        periodCount++;
        if (periodCount === pers) {
          position = i;
          break;
        }
      }
    }

    if (position !== -1) {
      return str.substring(0, position + 1);
    } else {
      return "The string is not a URL";
    }
  }

  function handleDoors(src) {
    //alert(src.value); 
    // Store all divs with role="img"
    let strDivImgList = document.querySelectorAll('div[role="img"]');
    let arrDivImgList = Array.from(strDivImgList).filter(element => {return element.checkVisibility();});
    
    printArray(arrDivImgList, 'arrDrvImgList');
    
    console.log(arrDivImgList[1]);
    let origId = arrDivImgList[1].getAttribute('id');
    
    // Assign newID to the ID of the vehicle without a number value to be passed
    //   in to imgSwitch later
    let newId = origId.slice(0, -1);
    console.log(`newId = ${newId}`);
    
    // Assign imgBackground to the url of the picture
    let imgBackground = document.getElementById(origId).style.backgroundImage
    console.log(`${newId}.style.backgroundImage = ${imgBackground}`);
    
    // Strip off the 'url' portion
    let imgURL = imgBackground.slice(4, -1).replace(/\"/g, "");
    console.log(`imgURL = ${imgURL}`);
    
    // Load the new image with correct doors
    imgSwitch(newId, imgURL, src.value);
  }   
</script>
