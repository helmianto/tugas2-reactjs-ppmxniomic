import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
    render(){
        return (
            <div>
                <h3>Daftar Menu Makanan Yang Kami Sediakan : </h3>
                <td>
                    <ListMakanan imgsrc="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                </td>
                <td>
                    <ListMakanan imgsrc="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                </td>
                <td>
                    <ListMakanan imgsrc="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                </td>
                <td>
                    <ListMakanan imgsrc="resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                </td>
                <td>
                    <ListMakanan imgsrc="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                </td>
            </div>
        );
    }
}

export default MenuMakanan;