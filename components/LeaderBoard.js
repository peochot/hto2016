import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import LeaderBoardRow from './LeaderBoardRow';
const mapStateToProps = ({rooms}) => ({rooms});

class LeaderBoard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        return (<ListView dataSource={ds.cloneWithRows(this.props.rooms)}
                          renderRow={(rowData) => <LeaderBoardRow navigator={this.props.navigator} room={rowData}/>}/>);
    }

}
export default connect(mapStateToProps, null)(LeaderBoard);
