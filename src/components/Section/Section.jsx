import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

const Section = styled.div`
    background: ${props => (props['data-offwhite'] ? props.theme.colors.offwhite : '#fff')};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
`

const SectionContent = styled.div`
    padding: 40px 80px 40px 80px;
    max-width: 1160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sect = props => (
    <Section theme={props.theme} data-offwhite={props['data-offwhite']}>
        <SectionContent>
            {props.children}
        </SectionContent>
    </Section>
)

Sect.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.node,
    'data-offwhite': PropTypes.bool,
}

export default Sect
