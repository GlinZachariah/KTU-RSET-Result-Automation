function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function funcBranch(newBranch) {
    Branch=newBranch;
    document.getElementById('branchname').innerHTML="Choosen Branch: "+Branch;
}
function funcGrade(newGrade) {
    Grade=newGrade;
    document.getElementById('gradename').innerHTML="Choosen Grade: "+Grade;
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

window.onload = init();
function init(){
     document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
}
 // var Branch="CS",Grade="(F)";
  function readSingleFile(evt) {
    var f = evt.target.files[0];
    var statement= "";
    var  data=new Array();
    var datacounter=0;
        
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
          var arr=contents.split("RET");
          var old_arr,new_arr;
          for(i=1;i<arr.length;i++){
            if(arr[i].search("ELECTRONICS & COMMUNICATION ENGG")!=-1){
            old_arr=arr[i].split("\nELECTRONICS & COMMUNICATION ENGG");
            arr[i]=old_arr[0];
            }
            if(arr[i].search("COMPUTER SCIENCE & ENGINEERING")!=-1){
            old_arr=arr[i].split("\nCOMPUTER SCIENCE & ENGINEERING");
            arr[i]=old_arr[0];
            }
            if(arr[i].search("APPLIED ELECTRONICS & INSTRUMENTATION ENGINEERING")!=-1){
            old_arr=arr[i].split("\nAPPLIED ELECTRONICS & INSTRUMENTATION ENGINEERING");
            arr[i]=old_arr[0];
            }
            if(arr[i].search("INFORMATION TECHNOLOGY")!=-1){
            old_arr=arr[i].split("\nINFORMATION TECHNOLOGY");
            arr[i]=old_arr[0];
            }
            if(arr[i].search("MECHANICAL ENGINEERING")!=-1){
            old_arr=arr[i].split("\nMECHANICAL ENGINEERING");
            arr[i]=old_arr[0];
            }
            if(arr[i].search("CIVIL ENGINEERING")!=-1){
            old_arr=arr[i].split("\nCIVIL ENGINEERING");
            arr[i]=old_arr[0];
            }
            if(i+1==arr.length){
            old_arr=arr[i].split("\n\n");
            new_arr=old_arr[0].concat("\n\n"+old_arr[1]);
            arr[i]=new_arr;
            
            }
          }
          for(i=1;i<arr.length;i++){
        if (arr[i] != undefined){
            var first=arr[i].split(" ")[0];
            var name=first.split("\n\n")[0];
            var sub1=first.split("\n\n")[1];
            var sub2=arr[i].split(" ")[1];
            var sub3=arr[i].split(" ")[2];
            var sub4=arr[i].split(" ")[3];
            var sub5=arr[i].split(" ")[4];
            var sub6=arr[i].split(" ")[5];
            var sub7=arr[i].split(" ")[6];
            var last=arr[i].split(" ")[7];
            if (last != undefined){
            var sub8=last.split("\n")[0];
            var sub9=last.split("\n")[1];
            }
            var count=0;
            var innerdatacounter=new Array(); 
            }
            if(name.search(Branch)!=-1){
              //console.log(name);
              //document.getElementById('output').append(name+"\n\n");
              name="RET"+name;
              statement=name+"\t";
              innerdatacounter[count]=name;
    if(sub1 != undefined){
                if(sub1.search(Grade) != -1){
                  //document.getElementById('output').append(sub1+" ");
    count+=1;
    sub1 = sub1.replace(/\,/g,"");
    statement=statement+sub1+" ";
    innerdatacounter[count]=sub1;
                }
              }
              if(sub2 != undefined){
                if(sub2.search(Grade) != -1){
                  //document.getElementById('output').append(sub2+" ");
    count+=1;
    sub2 = sub2.replace(/\,/g,"");
    statement=statement+sub2+" ";
    innerdatacounter[count]=sub2;

                
                }
              }
              if(sub3 != undefined){
                if(sub3.search(Grade) != -1){
                  //document.getElementById('output').append(sub3+" ");
    count+=1;
    sub3 = sub3.replace(/\,/g,"");
    statement=statement+sub3+" ";
    innerdatacounter[count]=sub3;
                
                }
              }
              if(sub4 != undefined){
                if(sub4.search(Grade) != -1){
                  //document.getElementById('output').append(sub4+" ");
    count+=1;
    sub4 = sub4.replace(/\,/g,"");
    statement=statement+sub4+" ";
    innerdatacounter[count]=sub4;
                
                }
              }
              if(sub5 != undefined){
                if(sub5.search(Grade) != -1){
              //document.getElementById('output').append(sub5+" ");
    count+=1;
    sub5 = sub5.replace(/\,/g,"");
    statement=statement+sub5+" ";
    innerdatacounter[count]=sub5;
                
                }
              }
              if(sub6 != undefined){
                if(sub6.search(Grade) != -1){
                  //document.getElementById('output').append(sub6+" ");
    count+=1;
    sub6 = sub6.replace(/\,/g,"");
    statement=statement+sub6+" ";
    innerdatacounter[count]=sub6;
                
                }
              }
              if(sub7 != undefined){
                if(sub7.search(Grade) != -1){
                  //document.getElementById('output').append(sub7+" ");
    count+=1;
    sub7 = sub7.replace(/\,/g,"");
    statement=statement+sub7+" ";
    innerdatacounter[count]=sub7;
                
                }
              }
              if(sub8 != undefined){
                if(sub8.search(Grade) != -1){
                  //document.getElementById('output').append(sub8+" ");
    count+=1;
    sub8 = sub8.replace(/\,/g,"");
    statement=statement+sub8+" ";
    innerdatacounter[count]=sub8;
                
                }
              }
              if(sub9 != undefined){
                if(sub9.search(Grade) != -1){
                  //document.getElementById('output').append(sub9+" ");
    count+=1;
    sub9 = sub9.replace(/\,/g,"");
    statement=statement+sub9+" ";
    innerdatacounter[count]=sub9;
                
                }
              }
              //document.getElementById('output').append("\n\n");
    statement=statement+"\n\n";
              if(count != 0){
                    document.getElementById('output').append(statement);
                    datacounter+=1;
                    data[datacounter]=innerdatacounter;
                }
            }
    
          }
          console.log(data);
          //document,getElementById('down').style
          var csvContent = '';
          data.forEach(function(infoArray, index) {
            dataString = infoArray.join(';');
            csvContent += index < data.length ? dataString + '\n' : dataString;
          });
          var download = function(content, fileName, mimeType) {
          var a = document.getElementById('down');
          a.style.display="block";
          mimeType = mimeType || 'application/octet-stream';
          if (navigator.msSaveBlob) { // IE10
            navigator.msSaveBlob(new Blob([content], {
                type: mimeType
                }), fileName);
            } else if (URL && 'download' in a) { //html5 A[download]
          a.href = URL.createObjectURL(new Blob([content], {
            type: mimeType
              }));
          a.setAttribute('download', fileName);
          //document.body.appendChild(a);
          a.click();
          //document.body.removeChild(a);
          } else {
            location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
          }
          }

          download(csvContent, 'Result.csv', 'text/csv;encoding:utf-8');
          //
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }
  