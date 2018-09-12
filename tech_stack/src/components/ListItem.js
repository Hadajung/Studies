import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex:1, padding: 5}}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title, descriptin } = this.props.library
    //console.log(this.props.library);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle:{
    fontSize: 18
  }
}
//ownProps = this.props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded : expanded } ;
}

export default connect(mapStateToProps, actions)(ListItem);

//if it's called it would make action creator work and pass them into props in ListItem
