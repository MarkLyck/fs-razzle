import styled from 'react-emotion'
import InputRange from 'react-input-range'

export const HistoryContainer = styled.div`
    width: 100%;
    padding: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Range = styled(InputRange)`
    .input-range {
        height: 1rem;
        position: relative;
        width: 100%;
    }
    .input-range__track--background {
        left: 0;
        margin-top: -0.15rem;
        position: absolute;
        right: 0;
        top: 50%;
    }
    .input-range__track {
        background: red;
        border-radius: 0.3rem;
        cursor: pointer;
        display: block;
        height: 0.3rem;
        position: relative;
        transition: left 0.3s ease-out, width 0.3s ease-out;
    }
`