import styled from 'react-emotion'

export const TooltipContainer = styled.div`
    position: relative;
    &:hover {
        color: ${props => props.theme.colors.primary};
        &::before {
            content: '${props => props.tip}';
            position: absolute;
            bottom: 24px;
            left: -8px;
            background: white;
            width: 240px;
            box-sizing: border-box;
            color: ${props => props.theme.colors.black};
            padding: 16px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,.16);
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
        }
    }
`
