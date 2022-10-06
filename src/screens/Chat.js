import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Message from '../components/Message';

messages = [
  {
    attachments: [
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
      },
      {url: 'https://lokeshdhakar.com/projects/lightbox2/images/image-5.jpg'},
    ],
    message: '',
    timestamp: '2022-09-30 14:23',
  },
  {
    attachments: [
      {
        url: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80',
      },
    ],
    message: '',
    timestamp: '2022-09-30 14:20',
  },
  {
    attachments: [
      {
        url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      },
    ],
    message: '',
    timestamp: '2022-09-29 13:00',
  },
  {
    attachments: [],
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    timestamp: '2022-09-29 12:55',
  },
  {
    attachments: [],
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: '2022-09-29 12:50',
  },
  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-29 12:45',
  },
  {
    attachments: [
      {
        url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80',
      },
    ],
    message: '',
    timestamp: '2022-09-29 11:00',
  },
  {
    attachments: [],
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: '2022-09-29 10:50',
  },
  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-29 10:50',
  },
  {
    attachments: [],
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: '2022-09-29 10:49',
  },
  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-29 10:45',
  },
  {
    attachments: [
      {
        url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80',
      },
    ],
    message: '',
    timestamp: '2022-09-28 09:10',
  },
  {
    attachments: [
      {
        url: 'https://st2.depositphotos.com/1105977/8291/i/450/depositphotos_82917414-stock-photo-colorful-autumn-landscape-with-yellow.jpg',
      },
      {
        url: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
      },
    ],
    message: '',
    timestamp: '2022-09-28 09:09',
  },
  {
    attachments: [],
    message:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    timestamp: '2022-09-28 09:09',
  },
  {
    attachments: [],
    message: 'It has survived not only five centuries',
    timestamp: '2022-09-28 09:09',
  },
  {
    attachments: [
      {
        url: 'https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80',
      },
    ],
    message: '',
    timestamp: '2022-09-28 09:05',
  },
  {
    attachments: [
      {
        url: 'https://images.unsplash.com/photo-1587387119725-9d6bac0f22fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9yaXpvbnRhbHxlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      {
        url: 'https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france-.jpg',
      },
    ],
    message: '',
    timestamp: '2022-09-28 09:00',
  },
];

function Chat() {
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="arrow-back-ios" size={20} color="#006AFF" />
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#006AFF'}}>
            Nguyễn Văn Tân
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 60,
            justifyContent: 'space-between',
          }}>
          <Icon name="phone" size={24} color="#006AFF" />
          <Icon name="videocam" size={24} color="#006AFF" />
        </View>
      </View>
      <View style={{marginTop: 12, paddingBottom: 60, alignItems: 'flex-end'}}>
        <FlatList
          data={messages}
          renderItem={message => <Message message={message.item} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    </View>
  );
}

export default Chat;
