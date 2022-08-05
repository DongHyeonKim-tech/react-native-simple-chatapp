import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

/* 화면을 확인할 수 있는 텍스트가 있는 간단한 회원가입 화면 */

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const Signup = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>Signup Screen</Text>
        </Container>
    )
};

export default Signup;
