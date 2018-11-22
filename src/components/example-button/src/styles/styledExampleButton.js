import styled from 'styled-components'

export default styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    background: none;
    color: ${props => props.theme.colour};
    border: 2px solid ${props => props.theme.borderColour};
`