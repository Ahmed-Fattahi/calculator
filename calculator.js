
let check
let elements = []

function clearing() {
   document.getElementById("result").value = "";
}
function put(id) {
   val1 = document.getElementById(id).value;

   if (check == false && !(val1 == "+" || val1 == "-" || val1 == "*" || val1 == "/" || val1 == "." /**/)) {
      document.getElementById("result").value = val1;
      console.log('replace it ')
      elements = [val1]

      console.log(elements)
   }
   else {
      document.getElementById("result").value += val1;
      elements.push(val1)

      console.log(elements)
   }
   check = true
}

function equal() {
   try {
      area = document.getElementById("result").value
      result = eval(area)
      if(result == Infinity) {document.getElementById("result").value = 'ERROR' }
      else { document.getElementById("result").value = result }
      elements=[result]

      console.log(elements)
   } catch (error) {
      document.getElementById("result").value = 'ERROR'
      elements=[]

      console.log(elements)
   }
   check = false

}

function deleting(){
   elements.pop()
   clearing()
   for(i=0;i<elements.length;i++){
      document.getElementById("result").value += elements[i]
   }
}




























/* db b9a Design w nzido des operation w7din okhrin  */
