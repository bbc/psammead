import React from 'react'
import StyledButton from './styles/styledExampleButton'

const ExampleButton = ({
    type = 'button',
    children,
    onClick
}) => {
    return (
        <StyledButton type={type} className="button" onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default ExampleButton
