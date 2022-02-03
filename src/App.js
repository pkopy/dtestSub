import logo from './logo.svg';
import './App.css';
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from "./LeftMenu/LeftMenu";
import obr1 from './images/04-KOS-KOM-0-0-CHR-1-prosty-80.jpg'
import obr2 from './images/04-SZY-SCI-0001-392X1900X6-U-GRA-0-pвИokrеgИy-90.jpg'
import {useState} from "react";
import {SolutionComparisonReport} from "../charts/src";

function App() {

    const [miniImg, setMiniImg] = useState()
    const [opacity, setOpacity] = useState(0)
    const [pos, setPos] = useState({left:0,top:0})
    const opa = (e, n) => {
        let x = n?1:0
        setPos({
            left: e.target.offsetLeft +50,
            top: e.target.offsetTop + 50
            // left: e.clientX,
            // top: e.clientY
        })
        console.log(e)
        const fun = () =>{
            if (n) {
                x=x-0.1
            } else {

                x=x+0.1
            }
            console.log(opacity)
            setOpacity(x)
            if (x > 1 || x < 0) {
                console.log('xxx')
                clearInterval(myInter)

            }
        }
         const myInter =setInterval(fun,20)

    }
    return (
        <div className="App">
            <header className="App-header">
                <div >

                    <LeftMenu data={[
                        {name: 1, parts:['a','b','c', 'd']},
                        {name: 2, parts:['a','b','c', 'd']},
                        {name: 3, parts:['a','b','c', 'd']},
                        {name: 4, parts:['a','b','c', 'd']},
                    ]}/>
                </div>
                <div>

                    <div style={{position:"absolute", background:'rgba(0,255,0,0.2)', top:0}}>
                        <div>

                            <img src={obr1} width={'100%'}/>
                        </div>
                        <div className={'circle'} onMouseEnter={e=>opa(e)} onMouseLeave={e=>opa(e,1)} />
                        <div className={'circle'} onMouseEnter={e=>opa(e)} onMouseLeave={e=>opa(e,1)} style={{left:'33.2%', top:'13%'}}/>
                        <div>
                            {<Card style={{ width: '18rem', position:'absolute', left:pos.left, top:pos.top, opacity: opacity, boxShadow:'0 0 10px #00000066'}}>
                                <Card.Body>
                                    <img src={obr2} width={'100%'}/>
                                </Card.Body>
                            </Card>}
                        </div>
                    </div>
                </div>


            </header>
        </div>
    );
}

export default App;
