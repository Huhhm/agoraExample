import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({backgroundColor}) => {
  return (
    <View style={{...styles.container, backgroundColor : backgroundColor?backgroundColor:'rgba(0,0,0,0.5)' }}>
      <ActivityIndicator size="large" color="#17530D" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:2
  },
});

export default Loading;