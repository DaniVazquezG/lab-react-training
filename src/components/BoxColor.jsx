import './BoxColor.css';

function BoxColor (props)  {
    const {r, g, b} = props
     const style = {
        backgroundColor: `rgb (${r}, ${g}, ${b})`,
        border: "solid 3px black"
     }
    
    return (
        <div style={style} className = "boxColor">
            
        <p>rgb({r}, {g}, {b}) </p> 
        
        </div>
     )
        
}

export default BoxColor