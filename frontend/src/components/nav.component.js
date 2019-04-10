import React, { Component } from 'react';
import Equipements from './Equipements.component';

class Nav extends Component {
  render() {
    return (
     <div className="container">
    <div className="wrapper fixed__footer">
 
        <header id="header" className="htc-header header--3 bg__white">
       
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header scroll-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="images/logo/logo.png" alt="logo"/>
                                </a>
                            </div>
                        </div>
                     
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                            <nav className="mainmenu__nav hidden-xs hidden-sm">
                                <ul className="main__menu">
                                     <li className="drop"><a href="portfolio-card-box-2.html">Equipements</a>
                                        <ul className="dropdown">
                                            <li><a href="portfolio-card-box-2.html">portfolio</a></li>
                                            <li><a href="single-portfolio.html">Single portfolio</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="index.html">Equipe</a></li>
                                    <li className="drop"><a href="index.html">Fournisseurs</a></li>
                                    <li className="drop"><a href="index.html">Sites</a></li>
                                
                                    <li className="drop"><a href="blog.html">Planning</a>
                                        <ul className="dropdown">
                                            <li><a href="blog.html">blog 3 column</a></li>
                                            <li><a href="blog-details.html">Blog details</a></li>
                                        </ul>
                                    </li>
                                    <li className="drop"><a href="shop.html">Interventions</a>
                                        <ul className="dropdown mega_dropdown">
                                       
                                            <li><a className="mega__title" href="shop.html">shop layout</a>
                                                <ul className="mega__item">
                                                    <li><a href="shop.html">default shop</a></li>
                                                </ul>
                                            </li>
                                          
                                            <li><a className="mega__title" href="shop.html">product details layout</a>
                                                <ul className="mega__item">
                                                    <li><a href="product-details.html">tab style 1</a></li>
                                                    
                                                </ul>
                                            </li>
                                         
                                            <li>
                                                <ul className="mega__item">
                                                    <li>
                                                        <div className="mega-item-img">
                                                            <a href="shop.html">
                                                                <img src="images/feature-img/3.png" alt="" />
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        
                                        </ul>
                                    </li>
                                <li className="drop"><a href="#">pages</a>
                                        <ul className="dropdown">
                                            <li><a href="about.html">about</a></li>
                                            <li><a href="#">testimonials <span><i className="zmdi zmdi-chevron-right"></i></span></a>
                                                <ul className="lavel-dropdown">
                                                    <li><a href="customer-review.html">customer review</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop</a></li>
                                            <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                            <li><a href="product-details.html">product details</a></li>
                                            <li><a href="cart.html">cart</a></li>
                                            <li><a href="wishlist.html">wishlist</a></li>
                                            <li><a href="checkout.html">checkout</a></li>
                                            <li><a href="team.html">team</a></li>
                                            <li><a href="login-register.html">login & register</a></li>
                                        </ul>
                                    </li> 
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                            </nav>
                            <div className="mobile-menu clearfix visible-xs visible-sm">
                                <nav id="mobile_dropdown">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#">portfolio</a>
                                            <ul>
                                                <li><a href="portfolio-card-box-2.html">portfolio</a></li>
                                                <li><a href="single-portfolio.html">Single portfolio</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">blog</a>
                                            <ul>
                                                <li><a href="blog.html">blog 3 column</a></li>
                                                <li><a href="blog-details.html">Blog details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">pages</a>
                                            <ul>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="customer-review.html">customer review</a></li>
                                                <li><a href="shop.html">shop</a></li>
                                                <li><a href="shop-sidebar.html">shop sidebar</a></li>
                                                <li><a href="product-details.html">product details</a></li>
                                                <li><a href="cart.html">cart</a></li>
                                                <li><a href="wishlist.html">wishlist</a></li>
                                                <li><a href="checkout.html">checkout</a></li>
                                                <li><a href="team.html">team</a></li>
                                                <li><a href="login-register.html">login & register</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                </nav>
                            </div>                         
                        </div>
                  
                        <div className="col-md-2 col-sm-4 col-xs-3">  
                            <ul className="menu-extra">
                                <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
                                <li><a href="login-register.html"><span className="ti-user"></span></a></li>
                                <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
                                <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
      
        </header>
    
        <div className="body__overlay"></div>
   
        <div className="offset__wrapper">
       
            <div className="search__area">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="search__inner">
                                <form action="#" method="get">
                                    <input placeholder="Search here... " type="text"/>
                                    <button type="submit"></button>
                                </form>
                                <div className="search__close__btn">
                                    <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="offsetmenu">
                <div className="offsetmenu__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="off__contact">
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logo/logo.png" alt="logo"/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <ul className="sidebar__thumd">
                        <li><a href="#"><img src="images/sidebar-img/1.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/2.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/3.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/4.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/5.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/6.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/7.jpg" alt="sidebar images"/></a></li>
                        <li><a href="#"><img src="images/sidebar-img/8.jpg" alt="sidebar images"/></a></li>
                    </ul>
                    <div className="offset__widget">
                        <div className="offset__single">
                            <h4 className="offset__title">Language</h4>
                            <ul>
                                <li><a href="#"> Engish </a></li>
                                <li><a href="#"> French </a></li>
                                <li><a href="#"> German </a></li>
                            </ul>
                        </div>
                        <div className="offset__single">
                            <h4 className="offset__title">Currencies</h4>
                            <ul>
                                <li><a href="#"> USD : Dollar </a></li>
                                <li><a href="#"> EUR : Euro </a></li>
                                <li><a href="#"> POU : Pound </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset__sosial__share">
                        <h4 className="offset__title">Follow Us On Social</h4>
                        <ul className="off__soaial__link">
                            <li><a className="bg--twitter" href="#"  title="Twitter"><i className="zmdi zmdi-twitter"></i></a></li>
                            
                            <li><a className="bg--instagram" href="#" title="Instagram"><i className="zmdi zmdi-instagram"></i></a></li>

                            <li><a className="bg--facebook" href="#" title="Facebook"><i className="zmdi zmdi-facebook"></i></a></li>

                            <li><a className="bg--googleplus" href="#" title="Google Plus"><i className="zmdi zmdi-google-plus"></i></a></li>

                            <li><a className="bg--google" href="#" title="Google"><i className="zmdi zmdi-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
     
        {/* <div className="ht__bradcaump__area" style="background: rgba(0, 0, 0, 0) url(images/bg/2.jpg) no-repeat scroll center center / cover ;">
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">portfolio card 2 column</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">portfolio card 2 column</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     */}
<Equipements></Equipements>  
    </div>
  
    <div id="quickview-wrapper">
      
        <div className="modal fade" id="productModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal__container" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-product">
                       
                            <div className="product-images">
                                <div className="main-image images">
                                    <img alt="big images" src="images/product/big-img/1.jpg"/>
                                </div>
                            </div>
                        
                            <div className="product-info">
                                <h1>Simple Fabric Bags</h1>
                                <div className="rating__and__review">
                                    <ul className="rating">
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                    </ul>
                                    <div className="review">
                                        <a href="#">4 customer reviews</a>
                                    </div>
                                </div>
                                <div className="price-box-3">
                                    <div className="s-price-box">
                                        <span className="new-price">$17.20</span>
                                        <span className="old-price">$45.00</span>
                                    </div>
                                </div>
                                <div className="quick-desc">
                                    Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern look.
                                </div>
                                <div className="select__color">
                                    <h2>Select color</h2>
                                    <ul className="color__list">
                                        <li className="red"><a title="Red" href="#">Red</a></li>
                                        <li className="gold"><a title="Gold" href="#">Gold</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                    </ul>
                                </div>
                                <div className="select__size">
                                    <h2>Select size</h2>
                                    <ul className="color__list">
                                        <li className="l__size"><a title="L" href="#">L</a></li>
                                        <li className="m__size"><a title="M" href="#">M</a></li>
                                        <li className="s__size"><a title="S" href="#">S</a></li>
                                        <li className="xl__size"><a title="XL" href="#">XL</a></li>
                                        <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                    </ul>
                                </div>
                                <div className="social-sharing">
                                    <div className="widget widget_socialsharing_widget">
                                        <h3 className="widget-title-modal">Share this product</h3>
                                        <ul className="social-icons">
                                            <li><a target="_blank" title="rss" href="#" className="rss social-icon"><i className="zmdi zmdi-rss"></i></a></li>
                                            <li><a target="_blank" title="Linkedin" href="#" className="linkedin social-icon"><i className="zmdi zmdi-linkedin"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                            <li><a target="_blank" title="Tumblr" href="#" className="tumblr social-icon"><i className="zmdi zmdi-tumblr"></i></a></li>
                                            <li><a target="_blank" title="Pinterest" href="#" className="pinterest social-icon"><i className="zmdi zmdi-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="addtocart-btn">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </div>
    );
  }
}

export default Nav;