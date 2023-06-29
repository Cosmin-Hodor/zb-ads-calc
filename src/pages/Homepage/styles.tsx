import styled from 'styled-components';

export const GetStartedButton = styled.button({
  height: '60px',
  padding: '0 20px',
  outline: '2px solid #000',
  border: 'unset',
  cursor: 'pointer',
  transition: '.1s all ease-out',
  margin: '40px 0 0 0',

  fontSize: '18px',

  '&:hover': {
    outline: '3px solid #000',
  },
});

export const ContentContainer = styled.div({
  margin: '80px 0 0 0',
});