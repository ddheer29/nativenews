const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const {withNativeWind} = require('nativewind/metro');

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

module.exports = withNativeWind(config, {input: './global.css'});
