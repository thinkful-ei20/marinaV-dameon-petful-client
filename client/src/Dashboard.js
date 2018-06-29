import React from 'react';
import Pet from './components/Pet'
import { connect } from 'react-redux';
import { fetchCat } from './actions/cats';
import { fetchDog } from './actions/dogs';
export class Dashboard extends React.Component {

  


  componentDidMount(){
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }
  
  render(){
    console.log(this.props)
    return (
      <div className="pets">
        <div className="row">
          <div className="col-6">
            <Pet
              {...this.props.catData}
              onAdoptPet = {()=>console.log('not working')}
              //onAdoptPet={() => this.props.dispatch(adoptCat())}
            />
          </div>
          <div className="col-6">
            <Pet
              {...this.props.dogData}
              onAdoptPet = {()=>console.log('not working')}
              //onAdoptPet={() => this.props.dispatch(adoptDog())}
            />
          </div>
        </div>
     </div>
    );
  }
  }

  const mapStateToProps = state => {
    return {
     catData:state.catReducer.data,
     dogData:state.dogReducer.data
    };  
};

export default connect(mapStateToProps)(Dashboard);


