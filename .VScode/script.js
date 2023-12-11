function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    //pegar a ta img
    const img = document.querySelector("#profile img")
//substituir a imagem
   
if(html.classList.contains('light')) {
//se tiver light mode , adicionar imagem light       
   img.setAttribute('src', './Assets/Avatar-Moon.png')

} else {
//se tiver sem light , adicionar avatar=moon
img.setAttribute('src', './Assets/avatar.png')
     
    }
    
/*ou podemos fazer de um jeito mais facil e similar*/

}