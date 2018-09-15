import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import { Element } from 'react-scroll'
import { HeroContainer, Content, Title, SliderImage, Overlay, Bold } from './styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class Hero extends Component {
  preStringTyped = arrPos => this.slider.slickGoTo(arrPos)

  componentDidMount() {
    const { portfolioReturn, winRatio } = this.props

    const strings = [
      `^1+${Math.floor(portfolioReturn)}% capital growth since 2009`,
      `^1+${Math.floor(winRatio)}% win ratio`,
      '^1Less risk',
      '^1Easy to use',
      '^1Lower costs',
      '^1Achieve your goals',
    ]

    const options = {
      strings,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 5000,
      loop: true,
      preStringTyped: this.preStringTyped,
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  slickSettings = {
    focusOnSelect: false,
    infinite: true,
    fade: true,
    speed: 1500,
    autoplay: false,
    swipe: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  render() {
    return (
      <HeroContainer>
        <Element name="hero" />
        <Content>
          <div className="text-content">
            <Title type="title">
              A <Bold>better</Bold> way to <Bold>invest</Bold>
            </Title>
            <div id="subtitles">
              <div className="type-wrap">
                <p ref={el => (this.el = el)} />
              </div>
            </div>
          </div>
        </Content>
        <Overlay />
        <Slider ref={slider => (this.slider = slider)} {...this.slickSettings}>
          <SliderImage data-image="/media/images/slides/speedster.jpg" />

          <SliderImage data-image="/media/images/slides/target.jpg" />

          <SliderImage data-image="/media/images/slides/net.jpg" />

          <SliderImage data-image="/media/images/slides/boat.jpg" />

          <SliderImage data-image="/media/images/slides/family.jpg" />
          <SliderImage data-image="/media/images/slides/achieveGoals.jpg" />
        </Slider>
      </HeroContainer>
    )
  }
}

Hero.defaultProps = {
  winRatio: 90,
  portfolioReturn: 700,
}

Hero.propTypes = {
  portfolioReturn: PropTypes.number.isRequired,
  winRatio: PropTypes.number,
}

export default Hero
