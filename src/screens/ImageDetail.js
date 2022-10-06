import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ImageDetail({navigation}) {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
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
