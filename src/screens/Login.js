import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { Button } from "react-native";
import { Image, Input } from '../components';
import { images } from '../utils/images';
/* 회원가입 화면으로 이동할 수 있는 버튼이 있는 간단한 로그인 화면 */

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 비밀번호를 입력하는 Input 컴포넌트의 ref로 지정
    const passwordRef = useRef();

    return (
        <Container>
            {/*<Text style={{fontSize: 30}}>Login Screen</Text>*/}
            <Image url={images.logo} imageStyle={{ borderRadius: 8 }}/>
            <Input
                label={'Email'}
                value={email}
                onChangeText={text => setEmail(text)}
                onSubmitEditing={() => passwordRef.current.focus()}
                placeholder={'Email'}
                returnKeyType={'next'}
            />
            <Input
                label={'Password'}
                value={password}
                onChangeText={text => setPassword(text)}
                onSubmitEditing={() => {}}
                placeholder={'Password'}
                returnKeyType={'done'}
                isPassword
                ref={passwordRef}
            />
            <Button title={'Signup'} onPress={() => navigation.navigate('Signup')}/>
        </Container>
    )
};

export default Login;
