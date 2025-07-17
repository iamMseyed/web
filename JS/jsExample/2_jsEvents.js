/* let online = navigator.onLine;
    if(online){
        alert('You are online!');
    }else{
        alert('You are offline!');
    }
*/        
    console.log('---------------JS Events -----------------');

    function onbeforeprint(){
        alert("This document is now being printed");
    }

    function onafterprint(){
        alert("This document is now being printed");
    }

    function functionUnload(){
        return 'Hi';
    }

    function blurFunction() {
    let x = document.getElementById("fname");
    if(x.value=='')
        alert('Empty value');
    else
        x.value = x.value.toUpperCase();
    }

    function myFunctionOnChange(){
        let selectValue = document.getElementById('selectOption').value;
        document.getElementById('selectOutuput').innerHTML='<br>The selected value is :'+ selectValue;
    }

    function onInputFunction(){
        let onInVal=document.getElementById('anyInput').value;
        document.getElementById('inputVal').innerHTML=`this will update: ${onInVal}`;
    }

    function onClickFunction(){
        document.getElementById('onClick').innerHTML='Why you did?';
    }

    function ondblClickFunction(){
        document.getElementById('ondblClick').innerHTML='Why you double click?';
    }

    document.addEventListener('DOMContentLoaded', (event) => { // when full document is loaded
            const dd = document.getElementById("myDiv");
                dd.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
            });
    });
    function onMH(){
        document.getElementById('oMHT').innerHTML='Mouse over happened!';
    }

    function onCopy(){
        document.getElementById('onC').innerHTML='&nbsp; (Text Copied!)';
    }

   function myFunction(x) {
     x.style.background = "yellow";
    }

    function myOIFunction() {
    let text = document.getElementById("onInput").value;
    document.getElementById("onInputDemo").innerHTML = "You wrote: " + text;
    }

    function onInvalidFunction(){
        document.getElementById('onInvalidFunctionDemo').innerHTML='Kindly fill this field!';
    }

    function onKeyDownFunction(){
        let onKeyDownVal= document.getElementById('onKeyDown').value.toLowerCase();
        document.getElementById('onKeyDownDemo').innerHTML=`Pressed key is ${onKeyDownVal}`;
    }

    function onKeyUpFunction(){
        let onKeyUpVal = document.getElementById("onKeyUp").value;
        document.getElementById('onKeyUpSpan').innerHTML=`Original data: ${onKeyUpVal.toLowerCase()}`;
    }

    function onLoadedFunction(){
        document.getElementById('onLoadedDemo').innerHTML='Image Loaded'
    }

    function onFunction() {
         document.getElementById("demoOnlineOffline").innerHTML = "Your browser is working online.";
    }
    
    function offFunction() {
         document.getElementById("demoOnlineOffline").innerText = "You are offline.";
    }   

    function onPageHideFunction(){
        alert('Want to navigate?');
    }
   let onScrollValue = 0;

   function onScrollFunction(){
        document.getElementById('onScrollDemo').innerHTML=onScrollValue++;
   }

   function onSearchFunction(){
        var xyz = document.getElementById("searchItem");
        document.getElementById("onSearchDemo").innerHTML = "You are searching for: " + xyz.value;
   }

   function onSelectFunction() {
     alert("You selected some text!");
   }

   function onToggleFunction(){
     alert('Toggled!');
   }