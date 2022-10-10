import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ImageDetail({navigation, route}) {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Image
        source={{
          uri: route.params.urlImage,
        }}
        style={{width: '100%', height: '100%', resizeMode: 'contain'}}
      />
      <Pressable
        style={{position: 'absolute', right: 8, top: 8}}
        onPress={() => navigation.goBack()}>
        <View
          style={{
            padding: 2,
            borderWidth: 1,
            borderColor: '#ccc',
          }}>
          <Icon name="close" color={'#000'} size={24} />
        </View>
      </Pressable>
    </View>
  );
}

export default ImageDetail;
