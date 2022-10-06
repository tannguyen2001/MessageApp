import {View, Image} from 'react-native';

imageUrls = [
  {
    id: 1,
    uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
  },
  {
    id: 2,
    uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
  },
  {
    id: 3,
    uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
  },
  {
    id: 4,
    uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
  },
  {
    id: 5,
    uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
  },
];

imageUrl = [
  'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
];

function MessageImage() {
  return (
    <View style={{marginVertical: 4}}>
      {/* <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
        }}
        style={{width: 200, height: 360, borderRadius: 6}}
      /> */}
      <View
        style={{
          width: 200,
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {imageUrls.map(item => (
          <Image
            source={{
              uri: 'https://media.istockphoto.com/photos/mountains-at-sunrise-the-dolomites-in-south-tyrol-italy-picture-id690356910?b=1&k=20&m=690356910&s=170667a&w=0&h=eHUsA1LUqLDnIUbL-FZ1AuoopZbIjhQyiQyZrZ7RFAw=',
            }}
            style={{width: 60, height: 60, borderRadius: 4, margin: 1}}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
}

export default MessageImage;
