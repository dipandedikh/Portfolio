import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import {getMovies} from '../../services/movies/api';
import {colors} from '../../util/colors';
import RectanglesCards from './ReactangleCards';
import SaqureCardColumn from './SquareCardForColumn';
import SaqureCards from './SquareCards';
import data from '../../services/data.json'
import Dots from '../../components/Dots';
const {height, width} = Dimensions.get('screen');

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    getMovies().then(movies => {
      this.setState({
        movies,
      });
    });
  }

  render() {
    const {movies} = this.state;
    const {navigation} = this.props;
    const scrollX = new Animated.Value(0);
    let scrollOffset =new Animated.Value(0);
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle={StatusBar.setBarStyle('dark-content')}
          backgroundColor={colors.primary}
        />
        <Header navigation={navigation} />
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View style={styles.flatlistContainer}>
            <ScrollView
              style={{
                flexGrow: 1,
              }}>
              <Animated.FlatList
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: true},
                )}
                onMomentumScrollEnd={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollOffset}}}],
                  {
                    useNativeDriver: false,
                  },
                )}
                horizontal
                pagingEnabled
                contentContainerStyle={{
                  paddingBottom: 10,
                }}
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
                renderItem={({item, index}) => {
                  return <RectanglesCards key={index} item={item} />;
                }}
              />
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Dots
                  data={movies}
                  scrollX={scrollX}
                  scrollOffset={scrollOffset}
                  strokeWidth={5}
                  dotSize={5}
                  marginHorizontal={5}
                  inActiveDotOpacity={0.3}
                  activeDotColor={colors.primary}
                  containerStyle={{bottom: 0}}
                  wormDot
                />
              </View>
              <NewMoviesTitle />
              <FlatList
                horizontal
                pagingEnabled
                contentContainerStyle={{
                  paddingBottom: 12,
                }}
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={item => item.key}
                renderItem={({item, index}) => {
                  return <SaqureCards key={index} item={item} />;
                }}
              />
              <TrendingTitle />
              <FlatList
                style={{
                  margin: 5,
                }}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  margin: 5,
                }}
                numColumns={3}
                contentContainerStyle={{
                  paddingBottom: 12,
                }}
                data={data}
                keyExtractor={item => item.key}
                renderItem={({item, index}) => {
                  return <SaqureCardColumn key={index} item={item} />;
                }}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const TrendingTitle = () => {
  return (
    <View
      style={{
        height: height * 0.05,
        width,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{...styles.moviesText, letterSpacing: 2}}>TRENDING</Text>
      </View>
  );
}

const NewMoviesTitle = () => {
  return (
    <View style={styles.movieHeaderContainer}>
      <Text style={styles.moviesText}>New Movies</Text>
      <Text style={styles.seeAllText}>
        See All
        <Icon
          type="feather"
          name="chevron-right"
          size={16}
          iconStyle={{top: 2}}
        />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlistContainer: {
    backgroundColor: colors.white,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  movieHeaderContainer: {
    height: height * 0.05,
    width,
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moviesText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '400',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
