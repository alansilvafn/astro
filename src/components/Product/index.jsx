import './style.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'

import product1 from '../../assets/images/product/product_1.png'
import product2 from '../../assets/images/product/product_2.png'
import product3 from '../../assets/images/product/product_3.png'
import product4 from '../../assets/images/product/product_4.png'
import product5 from '../../assets/images/product/product_5.png'
import product6 from '../../assets/images/product/product_6.png'

function Product() {
  return (
    <div className="product">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <div className="product__info">
              <div className="product__breadcrumb"></div>
              <div className="product__name">
                <h2 className="product__serie">Dark series</h2>
                <h1>Astro A30</h1>
              </div>
              <p className="product__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae arcu vestibulum, consectetur quam eu, lacinia est. Donec diam sem, dignissim ut dictum quis, tristique et justo.
              </p>
              <div className="product__reviews">
                <div className="product__rating"></div>
                <span>1566+ Reviews</span>
              </div>
              <div className="product__add">
                <span className="product__price">249,99€</span>
                <button type="button" className="button button-card">
                  Add to cart
                </button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={{ span: 6, offset: 1 }}>
            <div className="product__slider">
              <Carousel
                slide={false}
                indicators={false}
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
                  <img className="product__img" src={product1} alt="Product 1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="product__img" src={product2} alt="Product 2" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="product__img" src={product3} alt="Product 3" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="product__img" src={product4} alt="Product 4" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="product__img" src={product5} alt="Product 5" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="product__img" src={product6} alt="Product 6" />
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
