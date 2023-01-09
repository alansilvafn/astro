import './style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

import product1 from '../../assets/images/product/product_1.png'
import product2 from '../../assets/images/product/product_2.png'
import product3 from '../../assets/images/product/product_3.png'
import product4 from '../../assets/images/product/product_4.png'
import product5 from '../../assets/images/product/product_5.png'

function Product() {
  return (
    <div className="product">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className="product__info">
              <ul className="product__breadcrumb breadcrumb">
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    Producs
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    Astro
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    Dark Series
                  </a>
                </li>
              </ul>
              <div className="product__detail">
                <h2 className="product__serie">Dark series</h2>
                <h1 className="product__name">Astro A30</h1>
              </div>
              <p className="product__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu vestibulum, consectetur quam eu, lacinia est. Donec diam sem, dignissim ut dictum quis, tristique et justo.
              </p>
              <div className="product__reviews">
                <ul className="product__rating rating">
                  <li className="rating__item">
                    <FaStar className="rating__star active"></FaStar>
                  </li>
                  <li className="rating__item">
                    <FaStar className="rating__star active"></FaStar>
                  </li>
                  <li className="rating__item">
                    <FaStar className="rating__star active"></FaStar>
                  </li>
                  <li className="rating__item">
                    <FaStar className="rating__star active"></FaStar>
                  </li>
                  <li className="rating__item">
                    <FaStar className="rating__star"></FaStar>
                  </li>
                </ul>
                <span>1566+ Reviews</span>
              </div>
              <div className="product__add">
                <span className="product__price">249,99€</span>
                <button type="button" className="button button-add">
                  <FaShoppingCart className="icon"></FaShoppingCart> Add to cart
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={{ span: 6, offset: 1 }}>
            <div className="product__slider">
              <Carousel
                slide={false}
                indicators={true}
                prevIcon={
                  <span aria-hidden="true" className="button-slider button-slider--left">
                    <FaAngleLeft className="button-icon"></FaAngleLeft>
                  </span>
                }
                nextIcon={
                  <span aria-hidden="true" className="button-slider button-slider--right">
                    <FaAngleRight className="button-icon"></FaAngleRight>
                  </span>
                }
              >
                <Carousel.Item>
                  <div className="product__img" style={{ backgroundImage: `url(${product1})` }}></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="product__img" style={{ backgroundImage: `url(${product2})` }}></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="product__img" style={{ backgroundImage: `url(${product3})` }}></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="product__img" style={{ backgroundImage: `url(${product4})` }}></div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="product__img" style={{ backgroundImage: `url(${product5})` }}></div>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product
