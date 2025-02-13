import { StyleSheet, View } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { horizontalScale } from '../../utils/Scaling'
import { colors, sizes } from '../../utils/ThemeUtil'
import { useTheme } from '../../context/ThemeContext'

const NewsListSkeletion = () => {

    const { currentThemeMode } = useTheme();
    const highlightColor = currentThemeMode === "dark" ? colors.darkgray8 : colors.white
    const backgroundColor = currentThemeMode === "dark" ? colors.darkCapsule : colors.lightGray6


    return (
        <View style={styles.mainContainer}>
            <SkeletonPlaceholder highlightColor={highlightColor} backgroundColor={backgroundColor}>
                <View style={styles.container}>
                    <View style={styles.flexRowView}>
                        <View style={styles.img} />
                        <View style={styles.img} />
                    </View>

                    <View style={{ gap: 10 }}>
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} />
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(235)} />
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(80)} />
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(155)} />
                    </View>

                    <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(216)} marginTop={20} marginBottom={16} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 18 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 9, }}>
                            <SkeletonPlaceholder.Item height={23} borderRadius={23} width={23} />
                            <SkeletonPlaceholder.Item height={23} borderRadius={23} width={23} marginLeft={-8} />
                            <SkeletonPlaceholder.Item height={23} borderRadius={23} width={23} marginLeft={-8} />
                        </View>
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} flex={1} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 14, marginBottom: 20 }}>
                        <SkeletonPlaceholder.Item height={30} borderRadius={30} flex={1} />
                        <SkeletonPlaceholder.Item height={30} borderRadius={30} flex={1} />
                    </View>

                    <View style={{ gap: 8 }}>
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} />
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} />
                        <SkeletonPlaceholder.Item height={8} borderRadius={8} />
                    </View>

                    <View style={{ gap: 10, marginTop: 24, marginBottom: 36 }}>
                        <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(206)} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(92)} />
                            <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(115)} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(93)} />
                            <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(71)} />
                            <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(107)} />
                        </View>
                    </View>

                    {showPost ?
                        <>
                            <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(80)} />

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: horizontalScale(12.5), marginTop: 21, marginBottom: 24 }}>
                                <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(39)} />
                                <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(65)} />
                                <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(68)} />
                                <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(84)} />
                                <SkeletonPlaceholder.Item height={30} borderRadius={30} width={horizontalScale(52)} />
                            </View>

                            <View style={{ width: sizes.width, height: 48, borderWidth: 1, left: -16, justifyContent: 'center', alignItems: 'center', }}>
                                <SkeletonPlaceholder.Item height={8} borderRadius={8} width={horizontalScale(155)} />
                            </View>
                        </>
                        : null
                    }

                </View>
            </SkeletonPlaceholder>
        </View>
    )
}

export default NewsListSkeletion

const styles = StyleSheet.create({
    mainContainer: {
        width: sizes.width,
        alignSelf: 'center',
        marginTop: 19,
        marginBottom: 24,
    },
    container: {
        width: '100%',
        paddingHorizontal: 16
    },
    flexRowView: {
        flexDirection: 'row',
        marginBottom: 24
    },
    img: {
        width: sizes.width / 1.48,
        height: sizes.width / 1.48,
        borderRadius: 12,
        marginRight: 8
    },
    line: {
        height: 8,
        width: '100%',
        borderRadius: 8,
    }
})