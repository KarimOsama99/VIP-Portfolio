import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { GrShare } from "react-icons/gr";
// import { MagnificPopup } from "react-magnific-popup";
import kater from '../assets/images/portfolio/kater.png';
import kater2 from "../assets/images/portfolio/KhaterFoundation.png";
import ezhalha from "../assets/images/portfolio/ezhalha.png";
import ezhalha2 from "../assets/images/portfolio/Home.png";
import minible from "../assets/images/portfolio/minible.png";
import minible2 from "../assets/images/portfolio/minbible-com.png";
import pay from "../assets/images/portfolio/pay.png";
import pay2 from "../assets/images/portfolio/PayShip.png";
import gold from "../assets/images/portfolio/gold.png";
import gold2 from "../assets/images/portfolio/أفضل-منصة-ذهب-ومجوهرات-اون-لاين-في-السعودية-جولد-بوليفارد.png";
import vien from "../assets/images/portfolio/vien.png";
import vien2 from "../assets/images/portfolio/مختبرات-فين.png";
import mayasem from "../assets/images/portfolio/mayasem.png";
import mayasem2 from "../assets/images/portfolio/مياسم-العقار.png";
import monasib from "../assets/images/portfolio/مؤسسة-المناسب.png";
import monasib2 from "../assets/images/portfolio/monasib.png";
import portafoto from "../assets/images/portfolio/portafoto.png";
import portafoto2 from "../assets/images/portfolio/Home-Portafoto.png";
import almni from "../assets/images/portfolio/3lmni.png";
import almni2 from "../assets/images/portfolio/3lmni-school-Home.png";
import fusion from "../assets/images/portfolio/FUSION.png";
import fusion2 from "../assets/images/portfolio/fusionfull.png";
import golds from "../assets/images/portfolio/goldsgym.png";
import golds2 from "../assets/images/portfolio/Gold-s-Gym-Egypt.png";


const Portfolio = () => {
    useEffect(() => {
      new WOW.WOW({
        live: false,
      }).init();
    }, []);
  return (
    <div id="portfolio" class="project-masonry-area pt-115">
        <div class="container">
            <div class="row align-items-end">
                <div class="text-center mb-3">
                    <div class="section-title pb-20  wow animated bounceIn">
                        <h6 class="sub-title">Portfolio</h6>
                        <h4 class="title">Projects <span>Gallery.</span></h4>
                    </div>
                </div>
            </div> 
            <div class="row grid gllery-box">
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={kater} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={kater2}>
                                <span>Khater</span>
                            </a>
                            <a class="demo" target="_blank" href="http://khaterfoundation.com/en">
                                <GrShare />
                            </a>
                        </div>
                    </div> 
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={ezhalha} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={ezhalha2}>
                                <span>Ezhalha</span>
                            </a>
                            <a class="demo" target="_blank" href="https://ezhalha.com.sa/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={minible} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={minible2}>
                                <span>Minbible</span>
                            </a>
                            <a class="demo" target="_blank" href="http://www.minbible.com/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={pay} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={pay2}>
                                <span>PayShip</span>
                            </a>
                            <a class="demo" target="_blank" href="https://payship.biz/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={gold} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup"
                                href={gold2}>
                                <span>Jewellery</span>
                            </a>
                            <a class="demo" target="_blank" href="https://goldblv.com/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={vien} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={vien2}>
                                <span>Vien <br/> Labs</span>
                            </a>
                            <a class="demo" target="_blank" href="https://veinlab.net/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={mayasem} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={mayasem2}>
                                <span>Mayasem</span>
                            </a>
                            <a class="demo" target="_blank" href="http://mayasem.online/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={monasib} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={monasib2}>
                                <span>Almonasib</span>
                            </a>
                            <a class="demo" target="_blank" href="https://almonasib.org/home">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={portafoto} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={portafoto2}>
                                <span>Portafoto</span>
                            </a>
                            <a class="demo" target="_blank" href="http://portafoto.net/ar">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={almni} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={almni2}>
                                <span>3Lmni</span>
                            </a>
                            <a class="demo" target="_blank" href="https://3lmniacademy.com/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={fusion} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={fusion2}>
                                <span>Fusion AI</span>
                            </a>
                            <a class="demo" target="_blank" href="https://fusionai-co.com/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="wow animated fadeIn col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 grid-item">
                    <div class="single-gallery gallery-masonry mt-30">
                        <div class="gallery-image">
                            <img src={golds} alt="protfolio" />
                        </div>
                        <div class="gallery-icon">
                            <a class="image-popup" href={golds2}>
                                <span>Gold's Gym</span>
                            </a>
                            <a class="demo" target="_blank" href="https://karimosama99.github.io/GoldsGym/">
                                <GrShare />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio