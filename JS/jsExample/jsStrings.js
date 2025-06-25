    function getValues(){
        let st1 = document.getElementById('str1').textContent;
        let st2 = document.getElementById('str2').textContent;
        let st3 = st1+st2;
        document.getElementById('str3').textContent=st3;

        let strLen1 = st1.length;
        let strLen2= st2.length;
        let strLen3 = st3.length;
        document.getElementById('strVal1').innerHTML=strLen1;
        document.getElementById('strVal2').innerHTML=strLen2;
        document.getElementById('strVal3').innerHTML=strLen3;


        let x = 'anyName';
        let y = new String('anyName');


        console.log(`x: ${x} and y:${y}, type of x: ${typeof(x)} and type of y: ${typeof(y)}`)
        if(x==y)
            console.log('both text content is same');
        else 
            console.log('not same');

        if(x===y)
            console.log('Both text and type or same');
        else
            console.log('Either text or type is not same');

        console.log(`length of ${x} is ${x.length}`);
        console.log(`for ${x}, character at (.charAt()) 5 is ${x.charAt(4)}`);
        console.log(`for ${x}, character code (.charCodeAt()) at 5 is ${x.charCodeAt(4)}`);
        console.log(`for ${x}, character at (.at()) -4 is ${x.at(-4)}`);
        console.log(`for ${x}, property access [] at (name[5])  is ${x[4]}`);
// Property access might be a little unpredictable:

        console.log(`slice of ${x} is ${x.slice(0,4)}`);
        console.log(`substring of ${x} is ${x.substring(0,4)}`);
        console.log(`substr of ${x} is ${x.substr(0,4)} - DEPRICATED!`);
// substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring()
       
        let trimCheck = '   this is not    b   ';
        console.log(trimCheck.trim());     
        console.log(trimCheck.trimStart()); 
        console.log(trimCheck.trimEnd());

        let textPS = "5";
        let paddedPS = textPS.padStart(4,"0");

        console.log(paddedPS);


        let textPSs = "5";
        let paddedPSs = textPSs.padStart(4,"x");
        console.log(paddedPSs);

        let textR = "Hello world!";
        let resultR = textR.repeat(2);

        console.log(resultR);

        let textRp = "Please visit Microsoft!";
        let newTextRp = textRp.replace("Microsoft", "W3Schools");

        console.log(newTextRp)

        let textI = "Please locate where 'locate' occurs!";
        let indexI = textI.indexOf("locate");

        console.log(indexI);

        let textLI = "Please locate where 'locate' occurs!";
        let indexLI = textLI.lastIndexOf("locate");

        console.log(indexLI);

        let textIO = "Please locate where 'locate' occurs!";
        let indexIO = textIO.indexOf("locate", 15);

        console.log(indexIO);


        let textS = "Please locate where 'locate' occurs!";
        let search=textS.search("locate");
        console.log(search);


        let textM = "The rain in SPAIN stays mainly in the plain";
        let match=textM.match(/ain/);

        console.log(match);

        let textMG = "The rain in SPAIN stays mainly in the plain";
        let matchG= textMG.match(/ain/g);
        console.log(matchG);


        let textIncludes = "Hello world, welcome to the universe.";
        let includes=textIncludes.includes("world");

        console.log(includes);

        let textStartsWith = "Hello world, welcome to the universe.";
        let startsWith = textStartsWith.startsWith("Hello");
        console.log(startsWith);


        let textStarts = "Hello world, welcome to the universe.";
        let startWithIndex=textStarts.startsWith("world", 5)

        console.log(startWithIndex);


        let textEW = "John Doe";
        let ew=textEW.endsWith("Doe");
        console.log(ew);
        


};