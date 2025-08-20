<script>
  function imgSwitch(id, color, cat) {
    let div1 = id + "1";
    let div2 = id + "2";
    let strURL = "";

    let strBI = document.getElementById(div1).style.backgroundImage.slice(4, -1).replace(/["'"]/g, "");
    console.log(`strBI = ${strBI}`);
    let arrBI = strBI.split(".");
    printArray(arrBI);

    arrBI[3] = color;
    printArray(arrBI);
    strURL = concatArray(arrBI);
    console.log(`strURL = ${strURL}`);

    document.getElementById(div1).style.backgroundImage = "url(" + strURL + ")";
    document.getElementById(div2).style.backgroundImage = "url(" + strURL + ")";
  }

  function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`arrBI[${i}] = ${arr[i]}`);
    };
  }

function concatArray(arr) {
  let strArr = "";
  for (let i = 0; i < arr.length; i++) {
    strArr += arr[i];
    if (i != arr.length) {
      strArr += ".";
    }    
  }
  //strArr += ".png";
  return strArr;
}

$(function() {
  $('#s-toggle-event').change(function() {
    $('#console-event').html('Toggle: ' + $(this).prop('checked'))
  })
})

</script>