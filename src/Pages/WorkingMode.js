import React, {Component} from 'react';

export default class WorkingMode extends Component {
  render() {
     return (
       <>
       <div>
          <h3 align ="center">Режимы работы РУП "Гродноэнерго", филиалов и районов электрических сетей"</h3>

       </div>

       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Наименование филиала, района электрических сетей (РЭС),  адрес, телефон</th>
      <th scope="col">Режим работы *</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Аппарат управления
РУП «Гродноэнерго»
230003, пр-т Космонавтов, 64
тел.(0152) 79-23-59</th>
      <td>пн.-чт. 8.15-17.15
пятн. 8.15-16.00
обед 12.30-13.15</td>

    </tr>
    <tr>
      <th scope="row">Гродненская ТЭЦ-2
230003, г.Гродно, шоссе Скидельское, 10
тел.(0152) 45-33-59</th>
      <td>пн.-чт. 8.15-17.15
пятн. 8.15-16.00
обед 12.30-13.15</td>

    </tr>
    <tr>
      <th scope="row">Гродненские электрические сети
230003, Скидельское шоссе, 18
тел.(0152) 45-43-59</th>
      <td>пн.-чт. 8.15-17.15
пятн. 8.15-16.00
обед 12.30-13.15</td>

    </tr>
  </tbody>
</table>
</>
     )
   }
 }
