import React from 'react';

class ListMenuUtama extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <center>Selamat Datang Di Warung Nusantara</center>
                </h1>
                <center>
                    <img src={this.props.imgsrc}  alt="Masakan Nusantara" width="600" />
                </center>
            </div>
        );
    }
}

export default ListMenuUtama;