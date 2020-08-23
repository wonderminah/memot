import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import MemoDetailScreen from './MemoDetailScreen';


class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MemoList></MemoList>
                <CircleButton name="plus" />
                {/* <MemoDetailScreen></MemoDetailScreen> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
});

export default MemoListScreen;