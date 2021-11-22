import 'dotenv/config'

export default {
  expo: {
    name: 'weather-app',
    slug: 'weather-app',
    version: '0.2',
    orientation: 'portrait',
    icon: './assets/app_icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#426AB3',
    },
    extra: {
      apiKey: process.env.API_KEY,
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/app_icon.png',
        backgroundColor: '#426AB3',
      },
    },
    web: {
      favicon: './assets/app_icon.png',
    },
    plugins: ['expo-location'],
  },
}
