const url = 'https://fakestoreapi.com/products?limit=0';
const url2 = 'https://dummyjson.com/products/category/laptops'
const url3 = ' https://api.escuelajs.co/api/v1/products?offset=0&limit=0';
const url4="https://0c97fddd-2312-4977-ba22-823104321cf6.mock.pstmn.io/product";
const url5="http://localhost:8002/api/v1/product/8f688c30-1f7b-4b82-8132-ad8cbd49368b/";


const url2a='https://dummyjson.com/products/category/furniture';
const url2b='https://dummyjson.com/products/category/fragrances';
const url2c='https://dummyjson.com/products/category/groceries';

export const Fetchdata1 = async () => {
    try {
        const response = await fetch(`${url3}`);
        const data = await response.json();
        const productsToDisplay = data.slice(2);
        const datasort=productsToDisplay.sort((a,b)=>a.price-b.price);

       return datasort;
       
    }
    catch (e) {
        console.error(e);
        throw e
    }

}







export const Fetchdata2 = async () => {
    try {
        const response = await fetch(`${url2}`);
        const data = await response.json()
        const alldata = data.products;
        const datasort= alldata.sort((c,d)=>c.price-d.price);
        return  datasort;
        
       
    }
    catch (e) {
        console.error(e);
        throw e
    }

}

export const Fetchdata2a = async () => {
    try {
        const response = await fetch(`${url2a}`);
        const data = await response.json()
        const alldata = data.products;
        const datasort= alldata.sort((c,d)=>c.price-d.price);
        return  datasort;
        
       
    }
    catch (e) {
        console.error(e);
        throw e
    }

}

export const Fetchdata2b = async () => {
    try {
        const response = await fetch(`${url2b}`);
        const data = await response.json()
        const alldata = data.products;
        const datasort= alldata.sort((c,d)=>c.price-d.price);
        return  datasort;
        
       
    }
    catch (e) {
        console.error(e);
        throw e
    }

}

export const Fetchdata2c = async () => {
    try {
        const response = await fetch(`${url2c}`);
        const data = await response.json()
        const alldata = data.products;
        const datasort= alldata.sort((c,d)=>c.price-d.price);
        return  datasort;
        
       
    }
    catch (e) {
        console.error(e);
        throw e
    }

}










export const Fetchdata3 = async () => {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        const datasort= data.sort((e,f)=>e.price-f.price);

       return datasort;
        
    }
    catch (e) {
        console.error(e)
        throw e
    }

}

export const Fetchdata4 = async () => {
    try {
        const response = await fetch(`${url4}`);
        const data = await response.json();
        const alldata = data.data;
        //const datasort= data.sort((g,h)=>g.price-h.price);

       return alldata;
        
    }
    catch (e) {
        console.error(e)
        throw e
    }

}

