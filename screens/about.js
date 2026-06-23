import React, { useState } from 'react';
import {
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

function AboutScreen() {
  const [size, setSize] = useState({
    w: 200,
    h: 200,
  });

  const onPress = () => {
    LayoutAnimation.spring();

    setSize({
      w: size.w - 5,
      h: size.h - 5,
    });
  };

  return (
    <View style={styles.container}>
      <Text>About Screen</Text>

      <View
        style={[
          styles.box,
          {
            width: size.w,
            height: size.h,
          },
        ]}
      />

      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Click to decrease the size of the square.
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutScreen;