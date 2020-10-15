import styled from 'styled-components';

const StyledBox = styled.div`
    display: block;
    border: 1px solid black;
    width: ${props => props.height || '500px'};
    height: ${props => props.height || '500px'};
    background-color:${props => props.bgColor}
`;

export default StyledBox;