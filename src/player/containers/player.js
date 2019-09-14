import React, {Component} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import Volume from '../components/volume';
import FullScreen from '../components/fullscreen';
import ProgressBar from '../components/progressbar';
import TimeLeft from '../components/timeleft';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    fullScreen: false,
    progress: 0.0,
    duration: 0.0,
    currentTime: 0.0,
    volume: 0,
    muted: true,
  };
  onBuffer = ({isBuffering}) => {
    //Recibe un objeto y dentro de ese objeto tiene una propiedad que dice que si esta cargando o no
    this.setState({
      loading: isBuffering, //Me diga lo que esta pasando en el buffering ese momento
    });
  };
  /* onLoad = () => {
    this.setState({
      loading: false, //Loading vaye directamente a falso, por que asumo que ya cargo el video
    });
  }; */
  //android - loader
  onLoad = payload => {
    this.setState({
      loading: false,
    });
  };

  playPause = () => {
    this.setState({
      paused: !this.state.paused, //Alrevez, que esta en falso paso a verdader y viceversa
    });
  };

  //la manera correcta de cambiar el estado  al contrario en vez de !this.state.pause
  /* playPause = () => {
    this.setState(function(prevState) {
      return {pause: !prevState.pause};
    });
  }; */

  fullScreen = () => {
    this.setState(function(prevState) {
      return {fullScreen: !prevState.fullScreen};
    });
  };
  onFullScreen = () => {
    this.fullScreen();
    this.state.fullScreen
      ? this.video.dismissFullscreenPlayer()
      : this.video.presentFullscreenPlayer(); //esto no funciona del todo bien
  };
  videoRef = element => {
    this.video = element;
  };
  onProgress = playload => {
    let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
    let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    let duration = (playload.seekableDuration / 60).toFixed(2); //seekableDuration: duracion de todo el video
    this.setState({
      currentTime: time,
      progress: playload.currentTime / playload.seekableDuration,
      duration: duration,
    });
  };
  onVolume = () => {
    var volume = this.state.volume + 0.5;
    var muted = this.state.muted;
    if (volume > 1) {
      volume = 0;
      muted = true;
    } else {
      muted = false;
    }
    this.setState({
      volume: volume,
      muted: muted,
    });
  };

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            style={styles.video}
            source={{
              uri:
                'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4',
            }}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            muted={this.state.muted}
            ref={this.videoRef}
            onProgress={this.onProgress}
            volume={this.state.volume}
          />
        }
        loader={<ActivityIndicator color="red" />}
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              //style={styles.container}
              paused={this.state.paused}
            />
            <ProgressBar progress={this.state.progress} />
            <TimeLeft
              duration={this.state.duration}
              currentTime={this.state.currentTime}
            />
            <Volume
              onPress={this.onVolume}
              volume={this.state.volume}
              muted={this.state.muted}
            />
            <FullScreen
              fullScreen={this.state.fullScreen}
              onPress={this.onFullScreen}
            />
            {/* <Text>progress bar |</Text>
            <Text>time left |</Text>
            <Text>fullscreen |</Text> */}
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    //// el video será flexible y se acomodará segun el tamaño que tenga el contenedor
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
