import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import Font from 'expo-font';
import { ThemeProvider } from "@react-navigation/native";
import { theme } from './theme';
import Navigation from './navigations';
import { images } from './utils/images';

// 프로젝트에서 사용할 이미지와 폰트를 미리 불러와서 사용할 수 있도록 함수 작성
const cacheImages = images => {
    return images.map(image => {
        // let result;
        // typeof image === 'string' ? result = Image.prefetch(image) : result = Asset.fromModule(image).downloadAsync();
        // return result
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
};
const cacheFonts = fonts => {
    return fonts.map(font => Font.loadAsync(font));
};

const App = () => {
    // 사용 환경에 따라 이미지, 폰트가 느리게 적용되는 문제 개선을 위한 _loadAssets 함수 구성
    const _loadAssets = async () => {
        const imageAssets = cacheImages([
            require('../assets/splash.png'),
            ...Object.values(images),
        ]);
        const fontAssets = cacheFonts([]);

        await Promise.all([...imageAssets, ...fontAssets]);
    };
    // _loadAssets 함수가 불러와야 하는 항목을 다 불러왔을 때 isReady 상태를 변경, 화면 렌더링
    const [isReady, setIsReady] = useState(true);

    return isReady ? (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle={'dark-content'}/>
            <Navigation/>
        </ThemeProvider>
    ) : (
        <AppLoading
            startAsync={_loadAssets}
            onFinish={() => setIsReady(true)}
            onError={console.warn}
        />
    )

};

export default App;
