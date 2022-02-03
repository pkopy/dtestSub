
import './leftMenu.css'
import {Button} from "react-bootstrap";
import {useState} from "react";

function LeftMenu (props) {
    const [active, setActive] = useState(null)
    const miniMenu = (parts) => {

        return(<div>
            {parts.map((d,i) => {
                return(<div>
                    <p>{d}</p>
                </div>)
            })}
        </div>)
    }
    const clickHandler = (name) => {
        if (name === active) {
            setActive(null)
        } else {
            setActive(name)
        }
    }
    return(
        <div className={'left_menu'}>
            {props.data&&props.data.map((d,i) =>
                <div key={i} style={{width:'100%'}}>
                    <Button  variant={"dark"} size={'lg'} className={'m-2 my-btn'} onClick={() => clickHandler(d.name)}>{d.name}</Button>
                    {active===d.name&&miniMenu(d.parts)}
                </div>


            )}
        </div>
    )
}

export default LeftMenu
