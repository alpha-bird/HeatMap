import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    Image, 
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import { Images, Metrics, Colors } from '@themes';

const point = [
    {latitude:35.477498, longitude:-97.534680, weight: 30},
    {latitude:35.477498, longitude:-97.534690, weight: 30},
    {latitude:35.477463, longitude:-97.534895, weight: 30},
    {latitude:35.477463, longitude:-97.534896, weight: 30},
    {latitude:35.477508, longitude:-97.534544, weight: 30},
    {latitude:35.477493, longitude:-97.534746, weight: 30},
    {latitude:35.477486, longitude:-97.534832, weight: 30},
    {latitude:35.477493, longitude:-97.534724, weight: 30},
    {latitude:35.477435, longitude: -97.534764, weight: 30},
    {latitude:35.477453, longitude: -97.534665, weight: 30},
    {latitude:35.477541, longitude: -97.534679, weight: 30},
    {latitude:35.477153, longitude: -97.534575, weight: 30},
    {latitude:35.477022, longitude: -97.534573, weight: 30},
    {latitude:35.477114, longitude: -97.534600, weight: 30},
];

class HomeScreen extends Component {
    render() {
        return (
            <View style = {{flex : 1}}>
                <MapView
	                provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 35.476931,
                        longitude: -97.534520,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002
                    }} >
                    <MapView.Heatmap points={point}
                                    opacity={1}
                                    radius={200}
                                    onZoomRadiusChange={{
                                        zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                        radius: [10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250]
                                    }}
                                    gradient={{
                                        colors: ["#FFFFFF", "#f1e852","#dfd641","#c8bf2a","#f93838","#db3030","#a91e1e", "#8b1717","#7c1212","#6b0c0c","#580404"],
                                        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9,1]}}
                                    maxIntensity={30}
                                    gradientSmoothing={100}
                                    heatmapMode={"POINTS_WEIGHT"}/>	
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

function mapStateToProps(state) {
    return { app_state : state };
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);