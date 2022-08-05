import React, { useContext } from 'react';
import ThemeContext from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from '../screens';

/* 첫 화면을 로그인 화면, 로그인 화면과 회원가입 화면을 가진 내비게이션 구현 */

const Stack = createStackNavigator();

const AuthStack = () => {
    const theme = useContext(ThemeContext);
    return (
        <Stack.Navigator
            initialRouteName={'Login'}
            screenOptions={{
                headerTitleAlign: 'center',
                // cardStyle: { backgroundColor: theme.backgroundColor }
                cardStyle: { backgroundColor: '#FFFFFF' }
            }}
        >
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Signup'} component={Signup}/>
        </Stack.Navigator>
    )
};

export default AuthStack;
