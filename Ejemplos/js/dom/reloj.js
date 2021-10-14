const d = document;

export function digitalReloj (reloj, btnPlay, btnStop){
    let relojTiempo;
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnPlay)){
            relojTiempo = setInterval(()=>{
                let relojHora = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${relojHora}</h3>`;
            },1000);
            e.target.disabled = true;
        };
        if(e.target.matches(btnStop)){
            clearInterval(relojTiempo);
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        };
    });
};
export function alarma(sonido, btnPlay, btnStop){
    let alarmaTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sonido;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(()=>{
                $alarm.play();;
            },2000);

            e.target.disabled = true;

        };

        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled = false;
        }

    });
}