import React from 'react';
import Footer from './Page/Footer';
import Header from './Page/Header';
import MenuKontak from './Page/MenuKontak';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuUtama from './Page/MenuUtama';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuMakanan />

        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
  }
}

export default App;
