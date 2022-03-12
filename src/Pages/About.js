import React, {Component} from 'react';
import '../Pages/block.css';
import structure from '../assets/основное производство.jpg';

export default class About extends Component {
  render() {
     return (
       <>
       <div>
          <h3 align ="center">Организационная структура РУП "Гродноэнерго"</h3>
       </div>
       <div className="warning">
       <img

           src={structure}
           alt="structure"
       />
          </div>


<div>
<p>В состав РУП «Гродноэнерго» входят 12 филиалов, из них относящиеся к энергетическому производству и строительству:</p>
<ul type="disc">
<li>теплоэлектроцентраль (<a href="https://www.energo.grodno.by/tec2">Гродненская ТЭЦ-2</a>);</li>
<li>четыре электросетевых филиала (Гродненские, Волковысские, Лидские и Ошмянские электрические сети);</li>
<li>два филиала тепловых сетей (Гродненские и Лидские тепловые сети);</li>
<li>предприятие средств диспетчерского и технологического управления;</li>
<li>ремонтно-строительное производство «Энергостройремонт».</li>
</ul>
</div>
</>
     )
   }
 }
