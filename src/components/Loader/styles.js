import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(75, 155, 190, 0.1);
  border-top: 0.2em solid #3e6d8d;
  border-radius: 50%;
  width: 3.28571429rem;
  height: 3.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`
