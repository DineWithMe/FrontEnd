import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import typographyStyle from '../../jss/material-kit-pro-react/components/typographyStyle.jsx'

function Small({ ...props }) {
  const { classes, children } = props
  return (
    <div className={classes.defaultFontStyle + ' ' + classes.smallText}>
      {children}
    </div>
  )
}

Small.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string,
}

export default withStyles(typographyStyle)(Small)
