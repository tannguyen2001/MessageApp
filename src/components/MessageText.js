import {View, Text} from 'react-native';

function MessageText() {
  return (
    <View
      style={{
        width: 180,
        borderRadius: 4,
        backgroundColor: '#00B2FF',
        color: '#fff',
        padding: 6,
      }}>
      <Text style={{color: '#fff', fontSize: 16}}>
        Đây là tin nhắn, nếu nó dài hơn thì sao ấy nhể
      </Text>
    </View>
  );
}

export default MessageText;
