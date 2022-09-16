const d = document;

let x = 0, y = 0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsball = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
        // console.log(e.keyCode);
        // console.log(limitsball , limitsStage);


        switch(e.keyCode){
            case 37:
                e.preventDefault();
                if(limitsball.left > limitsStage.left) x--;
            break;
            case 38:
                e.preventDefault();
                if(limitsball.top > limitsStage.top) y--;
            break;
            case 39:
                e.preventDefault();
                if(limitsball.right < limitsStage.right) x++;
            break;
            case 40:
                e.preventDefault();
                if(limitsball.bottom < limitsStage.bottom) y++;
            break;
            default:
                break;
        }

        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
}

export function shortcuts(e){
    // console.log(e.type)
    // console.log(e.key)
    // console.log(e.ctrlKey)
    // console.log(e)

    if(e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta");
    };

    if(e.key === "c" && e.altKey){
        confirm("Haz lanzado una confirmación");
    };

    if(e.key === "p" && e.ctrlKey){
        alert("vas a imprimir? :v");
    }
};