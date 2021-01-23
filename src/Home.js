import React from 'react';
import bg from './images/bg.jpg';
import "./Home.css";
import Product from './Product';
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'
import p3 from './images/p3.jpg'
import p4 from './images/p4.jpg'
import p5 from './images/p5.jpg'
import p6 from './images/p6.jpg'
function Home() {
    return (
        <div className="home">
            <img className="home_image" src={bg} alt=""/>
            {/* Product id, title, price, rating, image */}
            <div className="home_row">
                <Product 
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Succesfully Business Paperback"
                price ={11.96}
                rating={5}
                image={p1}
                />
                <Product 
                id="1232131"
                title="Singer Fashion Mate 3342 Electric Sewing Machine"
                price ={56.96}
                rating={5}
                image={p2}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="12321341"
                    title="Samsung lc49rg90ssuxen 49' curved led gaming monitor - super ultra wide dual wqhd 5120 x 1440"
                    price ={199.96}
                    rating={4}
                    image={p3}
                />
                <Product 
                    id="1221341"
                    title="amazon echo dot ( 3rd generation) | smart speaker with alexa"
                    price ={98.96}
                    rating={5}
                    image={p4}
                />
                <Product 
                    id="1232341"
                    title="New apple ipad pro (12.9-inch wi-fi 128gb) - silver (4th generation)"
                    price ={568.96}
                    rating={5}
                    image={p5}
                />
            </div>
            <div className="home_row">
                <Product 
                    id="1232131"
                    title="Samsung lc49rg90ssuxen 49' curved led gaming monitor - super ultra wide dual wqhd 5120 x 1440"
                    price ={68.96}
                    rating={4}
                    image={p6}
                />
            </div>
        </div>
    )
}

export default Home
