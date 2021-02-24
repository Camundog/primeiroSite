
const c = (e) => document.querySelector(e);

function menuToggle()
{
    
    let menuArea = document.getElementById('menu-area');

    if(menuArea.style.width == '200px')
    {
        menuArea.style.width = '0px';
    }
    else
    {
        menuArea.style.width = '200px';
    }
}

for(let i = 0; i < 9; i++)
{
    let boneItem = c('main a').cloneNode(true);
    c('main').append( boneItem);  
}

c('.pizzaWindowArea').style.opacity = 0;

        //no css estava display = 'none', por isso a mudança de style
        c('.pizzaWindowArea').style.display = 'flex';

        //O JS é muito rápido e acaba não aplicando o efeito de transição(css), necessitando
        //então de um tempinho pra ocorrer o efeito
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        }, 200);

function closeModal() {
    c('.pizzaWindowArea').style.opacity = 0;
    //Criando opacidade no modal
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
    //Declarando tempo pro modal sumir
}
