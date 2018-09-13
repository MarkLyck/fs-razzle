import styled from 'react-emotion'

export const TooltipContainer = styled.div`
    position: relative;
    color: ${props => props.theme.colors.gray};
    &:hover {
        color: ${props => props.theme.colors.primary};
        &::before {
            content: '${props => props.tip}';
            white-space: pre-wrap;
            position: absolute;
            bottom: 24px;
            left: ${props => (props.position !== 'left' ? '-8px' : '')};
            right: ${props => (props.position === 'left' ? '-8px' : '')};
            background: white;
            width: ${props => props.width || 240}px;
            box-sizing: border-box;
            color: ${props => props.theme.colors.black};
            padding: 16px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,.16);
            z-index: 11;
        }
        &::after {
            content: '';
            position: absolute;
            bottom: 20px;
            left: 2px;
            width: 12px;
            height: 12px;
            background: #fff;
            box-shadow: 2px 2px 1px rgba(0,0,0,.08);
            transform: rotate(45deg);
            z-index: 11;
        }
    }
`
