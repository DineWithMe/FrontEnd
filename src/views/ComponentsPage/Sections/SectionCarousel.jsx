import React from 'react'
// react component for creating beautiful carousel
import Carousel from 'react-slick'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
import Card from '../../../components/Card/Card.jsx'
import carouselStyle from '../../../jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx'
import image1 from '../../../../static/assets/img/bg.jpg'
import image2 from '../../../../static/assets/img/bg2.jpg'
import image3 from '../../../../static/assets/img/bg3.jpg'

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <div className={classes.section} id='carousel'>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
              <Card>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt='First slide'
                      className='slick-image'
                    />
                    <div className='slick-caption'>
                      <h4>
                        <LocationOn className='slick-icons' />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt='Second slide'
                      className='slick-image'
                    />
                    <div className='slick-caption'>
                      <h4>
                        <LocationOn className='slick-icons' />
                        Somewhere Beyond, United States
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt='Third slide'
                      className='slick-image'
                    />
                    <div className='slick-caption'>
                      <h4>
                        <LocationOn className='slick-icons' />
                        Yellowstone National Park, United States
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(carouselStyle)(SectionCarousel)
