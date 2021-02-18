import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const style = {
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  // borderRadius: 3,
  // border: 0,
  color: 'white',
  width: '150px',
  // height: 200,
  padding: '10px',
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const root = {
  maxWidth: 345,
  color: 'white',
  width: '120px',
  // height: 200,
  // padding: '10px',
};

const media = {
  height: 140,
}

// const StoryPin = ({ text, url }) => <Paper style={style} elevation={4}><Link href={url}>{text}</Link></Paper>;
const StoryPin = ({ text, url }) => <Link href={url}><Card style={root}>
  <CardActionArea>
    <CardMedia
      style={media}
      image="https://startsole.github.io/covid-stories/images/photos/blog/ms-carlene/carlene-4.jpg"
      title="Contemplative Reptile"
    />
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      {text}
    </Button>
  </CardActions>
</Card></Link>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 36.3,
      lng: -82.4014986,
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA_4aqJcZYOl-dHZdtZSht3rOolk8JzO3I' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={function (maps) {
            return {
              panControl: false,
              mapTypeControl: false,
              scrollwheel: false,
              zoomControl: false,
              styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
            }
          }}
        >
          <StoryPin
            lat={36.3395029}
            lng={-82.4014986}
            text="Ciara White"
            url="#ciara-white"
            img={'/covid-stories/images/photos/blog/color4.png'}
          />
          <StoryPin
            lat={36.3081711}
            lng={-82.3760159}
            text="Florence Fetzer"
            url="#florence-fetzer"
            img={'/covid-stories/images/photos/blog/florence-fetzer/florence-3.png'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;