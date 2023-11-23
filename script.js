let iniciar = () => {
    const button = document.getElementById('calcular')

    const itemJS0 = document.getElementsByClassName('item-js')[0];
    const itemJS1 = document.getElementsByClassName('item-js')[1];
    const itemJS2 = document.getElementsByClassName('item-js')[2];
    const itemJS3 = document.getElementsByClassName('item-js')[3];
    const itemJS4 = document.getElementsByClassName('item-js')[4];
    
    itemJS0.style.display = 'none';
    itemJS1.style.display = 'none'
    itemJS2.style.display = 'none'
    itemJS3.style.display = 'none'
    itemJS4.style.display = 'none'

    let calcular = () => {

       const adultosCBebida = document.getElementById('adultosCBebida').value;
       const adultosSemBebida = document.getElementById('adultosSemBebida').value;
       const criancas = document.getElementById('criancas').value;

       let menssagemErro = document.getElementById('mensagem');
        if(adultosCBebida === ""
        || adultosSemBebida === "" 
        || criancas === ""
        || adultosCBebida < 0
        || adultosSemBebida < 0
        || criancas < 0){
            /*menssagemErro.style.color = '#ea3838';
            menssagemErro.style.display = 'flex';
            menssagemErro.style.justifyContent = 'center';
            menssagemErro.style.alignItems = 'center';
            menssagemErro.style.paddingTop = '25px' */
            menssagemErro.innerHTML = '';
            menssagemErro.innerHTML = '[ERRO] Digite um valor válido';
        }
        else{
            const resCarne = document.getElementById('res-carne');
            const resAcompanhamento = document.getElementById('res-acompanhamento');
            const resCerveja = document.getElementById('res-cerveja');
            const resRefrigerante = document.getElementById('res-refrigerante');
            const resAgua = document.getElementById('res-agua');
            

            menssagemErro.innerHTML = '';
            let adultos = Number(adultosCBebida) + Number(adultosSemBebida);
            Number(criancas);
            Number(adultosCBebida);
            Number(adultosSemBebida)

            let carne = ((adultos * 400) + (criancas * 200)) / 1000;
            let acompanhamentos = ((adultos * 200) + (criancas * 200)) / 1000;
            let cerveja = (adultosCBebida * 2);
            let refrigerante = ((adultosSemBebida * 500) + (criancas * 500)) / 1000;
            let agua = ((adultos * 400) + (criancas * 400)) / 1000;

            //let mensagem = `Carne: ${carne.toLocaleString('pt-BR')}g\nAcompanhamentos: ${acompanhamentos.toLocaleString('pt-BR')}g\nCerveja: ${cerveja.toLocaleString('pt-BR')}l\nRefrigerante: ${refrigerante.toLocaleString('pt-BR')}ml\nÁgua: ${agua.toLocaleString('pt-BR')}ml`;
            //alert(mensagem);
            itemJS0.style.display = 'block';
            itemJS1.style.display = 'block'
            itemJS2.style.display = 'block'
            itemJS3.style.display = 'block'
            itemJS4.style.display = 'block'
            
            resCarne.innerHTML = `${carne.toLocaleString('pt-BR')} kg`
            resAcompanhamento.innerHTML = `${acompanhamentos.toLocaleString('pt-BR')} kg` 
            resCerveja. innerHTML = `${cerveja.toLocaleString('pt-BR')} l`
            resRefrigerante.innerHTML = `${refrigerante.toLocaleString('pt-BR')} l`
            resAgua.innerHTML = `${agua.toLocaleString('pt-BR')} l`

            
        }
        }

    button.addEventListener('click', calcular);
};
document.addEventListener('DOMContentLoaded', iniciar);