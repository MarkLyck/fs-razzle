import styled from 'react-emotion'
import { TableRow } from 'components/Table'

export const ItemRow = styled(TableRow)`
    @media (max-width: 850px) {
        .days-owned {
            display: none;
        }
    }
    @media (max-width: 720px) {
        .last-price {
            display: none;
        }
    }
    @media (max-width: 600px) {
        .cost-basis {
            display: none;
        }
    }
    @media (max-width: 450px) {
        .allocation {
            display: none;
        }
    }
`