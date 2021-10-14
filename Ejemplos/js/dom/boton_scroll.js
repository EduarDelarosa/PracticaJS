const d = document,
    w = window;

export default function scrollfuntion(btn){  
    const $scrollButton = d.querySelector(btn);
    w.addEventListener("scroll", (e) => {
        let scrollBtn = w.scrollY || d.documentElement.scrollTop;//Guardamos en una variable el numero de pixeles que ha sido desplazada la barra
        if(scrollBtn>250){
            $scrollButton.classList.remove("hidden");//si se cumple la condicion eliminamos la clase hidden
        }else{
            $scrollButton.classList.add("hidden");
        }
        //console.log(w.scrollY, d.documentElement.scrollTop);
    });
    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            //Utilizamos el metodo scrollTo que nos permite desplazarnos a las cordenadas
            w.scrollTo({
                behavior: "smooth",
                top: 0,
            });
        };
    })
}