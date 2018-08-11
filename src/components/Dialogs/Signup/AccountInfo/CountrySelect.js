import React from 'react'
import Select from 'react-select'
import countries from 'common/data/countries'
import { CountrySelectContainer } from './styles'

const CountrySelect = ({ onChange, onBlur }) => (
  <CountrySelectContainer onBlur={onBlur}>
    <label className="country-select-label" htmlFor={'country-select'}>
      country
    </label>
    <Select
      placeholder="Select Country"
      id="country-select"
      className="country-select-container"
      classNamePrefix="country-select"
      defaultOptions={countries}
      options={countries}
      onChange={onChange}
    />
  </CountrySelectContainer>
)

export default CountrySelect
