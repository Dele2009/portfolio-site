import webInfo from "../webvalues.json";
import "../App.css"
import New from "./products.jsx";
import { useState, useEffect } from "react";
import { Fetchdata2, Fetchdata2a, Fetchdata2b } from '../fetch.jsx';



// const [productdetailsFour, setProductDetailsFour] = useState([]);
// const [productdetailsFive, setProductDetailsFive] = useState([]);
// const [productdetailsSix, setProductDetailsSix] = useState([]);
const  productdetails=webInfo.products;
export const Page = () => {
    return (
        <div className='main-div'>
            {
                productdetails.map(productdetail => {
                    return <New key={productdetail.id} {...productdetail} />
                })
            }
        </div>
    );
}



export const Page2 = () => {
    const [productdetailsTwo, setProductDetailsTwo] = useState([]);
    useEffect(() => {
        async function Fetchtwo() {
            const datatwo = await Fetchdata2();
            setProductDetailsTwo(datatwo);
        }
        Fetchtwo()
    }, [])
    return (
        <div className='main-div'>
            {
                productdetailsTwo.map(productdetailTwo => {
                    return <New key={productdetailTwo.id} {...productdetailTwo} />
                })
            }
        </div>
    );
}



export const Page3 = () => {
    const [productdetailsThree, setProductDetailsThree] = useState([]);
    useEffect(() => {
        async function Fetchthree() {
            const datatwo = await Fetchdata2a();
            setProductDetailsThree(datatwo);
        }
        Fetchthree();
    }, [])
    return (
        <div className='main-div'>
            {
                productdetailsThree.map(productdetailThree => {
                    return <New key={productdetailThree.id} {...productdetailThree} />
                })
            }
        </div>
    );
}



export const Page4 = () => {
    const [productdetailsFour, setProductDetailsFour] = useState([]);
    useEffect(() => {
        async function Fetchthree() {
            const datatwo = await Fetchdata2b();
            setProductDetailsFour(datatwo);
        }
        Fetchthree();
    }, [])
    return (
        <div className='main-div'>
            {
                productdetailsFour.map(productdetailFour => {
                    return <New key={productdetailFour.id} {...productdetailFour} />
                })
            }
        </div>
    );
}
