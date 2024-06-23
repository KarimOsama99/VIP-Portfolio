import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { GrShare } from "react-icons/gr";
// import { MagnificPopup } from "react-magnific-popup";
import kater from '../assets/images/portfolio/kater.webp';
import kater2 from "../assets/images/portfolio/KhaterFoundation.webp";
import ezhalha from "../assets/images/portfolio/ezhalha.webp";
import ezhalha2 from "../assets/images/portfolio/Home.webp";
import minible from "../assets/images/portfolio/minible.webp";
import minible2 from "../assets/images/portfolio/minbible-com.webp";
import pay from "../assets/images/portfolio/pay.webp";
import pay2 from "../assets/images/portfolio/PayShip.webp";
import gold from "../assets/images/portfolio/gold.webp";
import gold2 from "../assets/images/portfolio/أفضل-منصة-ذهب-ومجوهرات-اون-لاين-في-السعودية-جولد-بوليفارد.webp";
import vien from "../assets/images/portfolio/vien.webp";
import vien2 from "../assets/images/portfolio/مختبرات-فين.webp";
import mayasem from "../assets/images/portfolio/mayasem.webp";
import mayasem2 from "../assets/images/portfolio/مياسم-العقار.webp";
import monasib from "../assets/images/portfolio/مؤسسة-المناسب.webp";
import monasib2 from "../assets/images/portfolio/monasib.webp";
import portafoto from "../assets/images/portfolio/portafoto.webp";
import portafoto2 from "../assets/images/portfolio/Home-Portafoto.webp";
import almni from "../assets/images/portfolio/3lmni.webp";
import almni2 from "../assets/images/portfolio/3lmni-school-Home.webp";
import fusion from "../assets/images/portfolio/FUSION.webp";
import fusion2 from "../assets/images/portfolio/fusionfull.webp";
import golds from "../assets/images/portfolio/goldsgym.webp";
import golds2 from "../assets/images/portfolio/Gold-s-Gym-Egypt.webp";


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
                                <span>Vien Labs</span>
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