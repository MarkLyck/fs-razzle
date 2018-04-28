import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typed from 'typed.js'
import { HeroContainer, Content, SliderImage, StyledSlider, Overlay, Bold } from './styles'

class Hero extends Component {
    state = { slide: 0 }

    preStringTyped = arrPos => this.setState({ slide: arrPos })

    componentDidMount() {
        const { portfolioReturn, winRatio } = this.props

        const strings = [
            'Achieve your goals',
            `+${Math.floor(portfolioReturn)}% capital growth since 2009`,
            'Less risk',
            'Easy to use',
            'Lower costs',
            `+${Math.floor(winRatio)}% win ratio`,
        ]

        const options = {
            strings,
            typeSpeed: 60,
            backSpeed: 75,
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
                <Content>
                    <div className="text-content">
                        <h1 type="title">A <Bold>better</Bold> way to <Bold>invest</Bold></h1>
                        <div id="subtitles">
                            <div className="type-wrap">
                                <span
                                    style={{ whiteSpace: 'pre' }}
                                    ref={(el) => { this.el = el }}
                                />
                            </div>
                        </div>
                    </div>
                </Content>
                <Overlay />
                <StyledSlider slickGoTo={this.state.slide} {...this.slickSettings}>
                    <SliderImage data-image="/static/images/achieveGoals.jpg" />
                    <SliderImage data-image="/static/images/speedster.jpg" />
                    <SliderImage data-image="/static/images/net.jpg" />
                    <SliderImage data-image="/static/images/boat.jpg" />
                    <SliderImage data-image="/static/images/family.jpg" />
                    <SliderImage data-image="/static/images/target.jpg" />
                </StyledSlider>
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
