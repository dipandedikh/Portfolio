import React, { Component } from 'react'
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native-elements';

import { getImages } from '../../services/images/images';
import { colors } from '../../util/colors';

const {height, width} = Dimensions.get('screen');
const SPACING = 10;
const IMAGE_SIZE = 80;
interface IProps {
}

interface IState {
  images?: Array<any>;
  activeIndex: number;
}


export default class ImageGallery extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeIndex: 0,
    };
  }

  private topRef = React.createRef<FlatList>();
  private thumbRef = React.createRef<FlatList>();

  componentDidMount() {
    getImages()
      .then(images => {
        this.setState({
          images,
        });
      })
      .catch(error => {});
  }

  renderItem = ({item}) => {
    return (
      <View key={item.id} style={styles.imageContainer}>
        <Image
          PlaceholderContent={<ActivityIndicator color={colors.primary} />}
          style={styles.image}
          source={{uri: item.download_url}}
        />
      </View>
    );
  };

  renderFooterItem = ({item, index}) => {
    const {activeIndex} = this.state;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          this.scrollToActiveIndex(index);
        }}>
        <Image
          PlaceholderContent={<ActivityIndicator color={colors.primary} />}
          style={{
            ...styles.footerImage,
            borderWidth: 2,
            borderColor: activeIndex == index ? colors.white : 'transparent',
          }}
          source={{uri: item.download_url}}
        />
      </TouchableOpacity>
    );
  };

  /**
   * This function will take the index as parameter and scroll to the selected image.
   * @param index 
   */

  scrollToActiveIndex = (index: number) => {
    this.setState({
      activeIndex: index,
    });

    this.topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });

    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      this.thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      this.thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  render() {
    const {images} = this.state;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <FlatList
            ref={this.topRef}
            style={{zIndex: -1}}
            pagingEnabled
            horizontal
            onMomentumScrollEnd={event => {
              this.scrollToActiveIndex(
                Math.floor(event.nativeEvent.contentOffset.x / width),
              );
            }}
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
          />
          <FlatList
            ref={this.thumbRef}
            contentContainerStyle={{paddingHorizontal: SPACING}}
            style={styles.flatlist}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            data={images}
            keyExtractor={item => item.id}
            renderItem={this.renderFooterItem}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  image: {
    height,
    width,
    resizeMode: 'cover',
  },
  footerImage: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    borderRadius: 8,
    marginRight: SPACING,
  },
  flatlist: {
    zIndex: 1,
    position: 'absolute',
    bottom: IMAGE_SIZE,
  },
});
