import {View, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import AutoHeightImage from 'react-native-auto-height-image';

function MessageImage({attachments}) {
  const navigation = useNavigation();
  const lengthImages = attachments.length;

  function renderImages() {
    let ImageComponent = <></>;

    if (lengthImages == 1) {
      ImageComponent = (
        <Pressable
          onPress={() => {
            navigation.navigate('ImageDetail', {
              urlImage: attachments[0].url,
            });
          }}>
          <AutoHeightImage
            source={{
              uri: attachments[0].url,
            }}
            width={200}
          />
        </Pressable>
      );
    }

    if (lengthImages >= 2) {
      ImageComponent = (
        <View
          style={{
            width: 200,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {attachments.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                navigation.navigate('ImageDetail', {
                  urlImage: item.url,
                });
              }}>
              <Image
                source={{
                  uri: item.url,
                }}
                style={{width: 60, height: 60, borderRadius: 4, margin: 1}}
              />
            </Pressable>
          ))}
        </View>
      );
    }
    return ImageComponent;
  }

  return <View>{renderImages()}</View>;
}

export default MessageImage;
