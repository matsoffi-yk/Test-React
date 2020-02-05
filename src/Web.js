import React, { useState } from 'react';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import './Web.css';


const Web = props => {

    return (
        <div>
            <h2>{props.firstname} {props.lastname}</h2>
            <header>
                <h1 className='headerH1'>Let's a go</h1>
            </header>
            <section>
                <strong><p className='page'>Gallery : <a href="https://bit.ly/2RvCo8j">DONG BANG IN BALI</a></p></strong>
                <article>
                    <h1>This Website to do for keep my stories</h1>
                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href={img1}>
                                <img src={img1} alt="Cinque Terre" />
                            </a>
                            <div className="desc">Welcome to Bali ทริปปลายปี พาบัง ๆ ถ่ายรูปเท่ ๆ ที่บาหลี</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href={img2}>
                                <img src={img2} alt="Forest" />
                            </a>
                            <div className="desc">สวยฝุดๆ</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href={img3}>
                                <img src={img3} alt="Northern Lights" />
                            </a>
                            <div className="desc">ถ่ายเองเลยน่ะครับเนี่ยยยย</div>
                        </div>
                    </div>

                    <div className="responsive">
                        <div className="gallery">
                            <a target="_blank" href={img4}>
                                <img src={img4} alt="Mountains" />
                            </a>
                            <div className="desc">หล่อมากเลยคร้าาปป</div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Web;