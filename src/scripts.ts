(function(){
    const titulo = document.getElementById("titulo")
    titulo.style.color = "red"
    titulo.addEventListener("click",()=>alert("Hiciste click en el título"))

    const all_codepen_flex = document.querySelectorAll(".ejercicio-flex")
    const changeVal = (checkBox : HTMLInputElement, ret: number = 1) => {
      if(checkBox.checked) return ret
      return 0
    }
    const changeState = (_val: number, idCodeFlex: HTMLInputElement) => {
      if(_val === 0) {idCodeFlex.style.resize = "none"}
      if(_val === 1) {idCodeFlex.style.resize = "vertical"}
      if(_val === 2) {idCodeFlex.style.resize = "horizontal"}
      if(_val === 3) {idCodeFlex.style.resize = "both"}
    }
    all_codepen_flex.forEach( (code_flex) => {
      const idCodeFlex = code_flex.id
      console.log(`${idCodeFlex}-v`)
      const checkBoxVertical   = document.getElementById(`${idCodeFlex}-v`) as HTMLInputElement
      const checkBoxHorizontal = document.getElementById(`${idCodeFlex}-h`) as HTMLInputElement

      checkBoxVertical.addEventListener("click", e => {
        const _val = changeVal(e.target as HTMLInputElement, 1) + changeVal(checkBoxHorizontal, 2)
        changeState(_val, code_flex as HTMLInputElement)
      })
      checkBoxHorizontal.addEventListener("click", e => {
        const _val = changeVal(e.target as HTMLInputElement, 2) + changeVal(checkBoxVertical, 1)
        changeState(_val, code_flex as HTMLInputElement)
      })
    })
})()

function openTAB(evt: Event, cityName: string) {
    // Declare all variables
    var i, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    // evt.target.classList.toggle("active");
    (evt.target as HTMLElement).classList.toggle("active");
  }

