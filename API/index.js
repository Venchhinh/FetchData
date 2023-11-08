const getLogo=()=>{
    let data = '';
    const logo = ['logo1.jpg'];
    logo.map((e)=>{
        data += `<img src="img/${e}" alt="">`;
    });
    document.querySelector('.logo').innerHTML = data;
}
getLogo();
const getBanner=()=>{
    let data = '';
    const banner = ['banner.jpg'];
    banner.map((e)=>{
        data += `<img src="img/${e}" alt="">`;
    });
    document.querySelector('.banner').innerHTML = data;
}
getBanner();

const getproductTrading=async()=>{
    const url = "https://fakestoreapi.com/products/category/women's clothing?limit=4";
    const response = await fetch(url);
    const data = await response.json();
    let allProduct = '';
    data.map((val)=>{
        if(val.category==="women's clothing"){
           allProduct += `<div class="card">
                                <div class="box-img">
                                    <img src="${val.image}" alt="">
                                </div>
                          </div>`; 
        }
    });
    document.getElementsByClassName('fashion-trading')[0].innerHTML = allProduct;
    console.log(data);
}
getproductTrading();
const getAllProduct=async()=>{
    const url = "https://fakestoreapi.com/products";
    try{
        const response = await fetch(url);
        const data = await response.json();
        let result = '';
        data.map((e)=>{
            result += `
                    <div class="card">
                        <div class="image">
                            <img src="${e['image']}" alt="">
                        </div>
                        <div class="body">
                            <p>${e.category}</p>
                            <h1>${e.title}</h1>
                            <p>${e.description}</p>
                            <p>$ ${e.price}</p>
                            <button>Add to card</button>
                        </div>
                    </div>
            `;
            document.querySelectorAll('.box-new-fashion .box-card')[0].innerHTML=result;
        })
    }catch(err){
        console.log(err);
    }
}
getAllProduct();