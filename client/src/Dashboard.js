import React from 'react';
import Pet from './components/Pet'

export default function Dashboard (props){

  let dogObj = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
  let catObj = {  
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
  
    return (
      <div className="pets">
        <div className="row">
          <div className="col-6">
            <Pet
              {...catObj}
              onAdoptPet = {()=>console.log('not working')}
              //onAdoptPet={() => this.props.dispatch(adoptCat())}
            />
          </div>
          <div className="col-6">
            <Pet
              {...dogObj}
              onAdoptPet = {()=>console.log('not working')}
              //onAdoptPet={() => this.props.dispatch(adoptDog())}
            />
          </div>
        </div>
     </div>
    );
  }



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