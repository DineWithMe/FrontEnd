import React from 'react'
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// core components
import GridContainer from '../../../components/Grid/GridContainer.jsx'
import GridItem from '../../../components/Grid/GridItem.jsx'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import cardsStyle from '../../../jss/material-kit-pro-react/views/presentationSections/cardsStyle.jsx'

import cardsTest from '../../../../static/assets/img/assets-for-demo/cards-test.png'

class SectionCards extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classNames(classes.section, classes.sectionDark)}>
        <div className={classes.container}>
          <GridContainer justify='center'>
            <GridItem md={7} sm={7}>
              <div className={classes.imageContainer}>
                <img src={cardsTest} alt='views' />
              </div>
            </GridItem>
            <GridItem md={4} sm={5} className={classes.mlAuto}>
              <div className={classes.sectionDescription}>
                <h3 className={classes.title}>Unconventional Cards</h3>
                <h6 className={classes.description}>
                  One Card for Every Problem
                </h6>
                <h5 className={classes.description}>
                  We love cards and everybody on the web seems to. We have gone
                  above and beyond with options for you to organise your
                  information. From cards designed for blog posts, to product
                  cards or user profiles, you will have many options to choose
                  from. All the cards follow the material principles and have a
                  design that stands out.
                </h5>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

SectionCards.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(cardsStyle)(SectionCards)
