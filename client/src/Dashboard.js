import React from 'react';
import Pet from './components/Pet'
import { connect } from 'react-redux';
export class Dashboard extends React.Component {

  

  
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
     catData:state.catReducer,
     dogData:state.dogReducer
    };  
};

export default connect(mapStateToProps)(Dashboard);



  // //{...this.props.catToAdopt}{...this.props.dogToAdopt}
  // // <section className="pet">
  //       <header className="cat">
  //       <h2 className="pet-name">{catObj.name}</h2>
  //       <img src={catObj.imageURL} 
  //            alt={catObj.imageDescription} />
  //       </header>
  //       <main>
  //         More about {catObj.name}
  //         <dl>
  //           <dt>Sex</dt><dd>{catObj.sex}</dd>
  //           <dt>Age</dt><dd>{catObj.age}</dd>
  //           <dt>Breed</dt><dd>{catObj.breed}</dd>
  //           <dt>Story</dt><dd>{catObj.story}</dd>
  //         </dl>
  //         <button onClick={()=>console.log('working')}>Adopt</button>
  //       </main>
  //       </section>

        
  //       </div>

  //       <div className="col-6">
  //       <section className="pet">
  //       <header className="dog">
  //       <h2 className="pet-name">{dogObj.name}</h2>
  //       <img src={dogObj.imageURL} 
  //            alt={dogObj.imageDescription} />
  //       </header>
  //       <main>
  //         More about {dogObj.name}
  //         <dl>
  //           <dt>Sex</dt><dd>{dogObj.sex}</dd>
  //           <dt>Age</dt><dd>{dogObj.age}</dd>
  //           <dt>Breed</dt><dd>{dogObj.breed}</dd>
  //           <dt>Story</dt><dd>{dogObj.story}</dd>
  //         </dl>
  //         <button onClick={()=>console.log('working')}>Adopt</button>
  //       </main>
  //       </section>
  //       </div>
  //     </div>