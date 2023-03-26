import styled from '@emotion/styled'

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    font-size: ${props=>
        props.firstProps
    };
    background-color: ${props=> 
        props.thridProps ? "yellow" : "grey"
    };
`
export const DongsukImg = styled.img`

`