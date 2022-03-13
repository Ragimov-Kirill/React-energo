import React, {Component} from 'react';
import '../Pages/req.css';

export default class Requisites extends Component {
  render() {
     return (
       <>
       <div>
          <h3 align ="center">Реквизиты РУП "Гродноэнерго"</h3>
       </div>
       <div className ="requis">
       <p>
       <ins>
       Полное наименование
       </ins>
       : Гродненское республиканское унитарное предприятие электроэнергетики «Гродноэнерго»
       </p>
       <br/>
       <p>
       <ins>
       Сокращённое наименование
       </ins>
       : РУП «Гродноэнерго»
       </p>
       <p>
       <ins>
       Адрес
       </ins>
       : Республика Беларусь, город Гродно, проспект Космонавтов, 64
(почтовый индекс - 230003)
       </p>
       <br/>
       <p>
       <ins>
       Тел. (приемная)
       </ins>
       : +375 152 792 359</p>
       <p>
       <ins>
       Факс
       </ins>
       : +375 152 792 399</p>
       <p>
       <ins>
       Е-mail
       </ins>
       :
      <a href="mailto:volt@energo.grodno.by">
        volt@energo.grodno.by
        </a>
        </p>
        <p>
        <ins>
        Банковские реквизиты
        </ins>
        : р/с BY25AKBB30120000241434000000
        </p>
        <p>ОАО "АСБ Беларусбанк" г.Минск, пр-т. Дзержинского, 18</p>
        <p>БИК AKBBBY2X, УНП 500036458, ОКПО 00105897</p>

       </div>
       </>
     )
   }
 }
