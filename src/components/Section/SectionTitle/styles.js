import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

export const titleCSS = theme => ({
    fontWeight: '300',
    color: theme.colors.black,
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
})

export const Title = ({ children, theme }) => <Typography style={titleCSS(theme)}>{children}</Typography>

Title.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.object.isRequired,
}

export const SectionTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Divider = styled.div`
    width: 75px;
    background: ${props => props.theme.colors.primary};
    height: 2px;
    margin-bottom: 24px;
`
