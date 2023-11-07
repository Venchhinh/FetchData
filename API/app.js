// const url = ('https://fakestoreapi.com/products/1');
const fetchData = async()=>{
    let txt = '';
    try{
        const url = ('https://fakestoreapi.com/products?limit=20');
        const respone = await fetch(url);
        const data = await respone.json();
        for(let item of data){
            if(item.category==="men's clothing"){
                txt +=`
                <div class="card" style="width: 18rem;">
                    <img src="${item.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h1>${item.title}</h1>
                        <h3>${item.price}</h3>
                        <h3>${item.category}</h3>
                        <h3>${item.rating['rate']}</h3>
                    </div>
                </div>
            `;
            }
        document.getElementsByClassName('container')[0].innerHTML=txt;
        }
    }catch(err){
        console.log(err);
    }
}
fetchData();