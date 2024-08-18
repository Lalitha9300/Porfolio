import '../CSS/WaterDropGrid.css'
import anime from 'animejs'
const WaterDropGrid=()=>{
    return (
        <div className='back'>
            <DotGrid />
        </div>
    )
}
const grid_width=25;
const grid_height=25;


const DotGrid=()=>{
    const dots=[];
    let index=0;
    for(let i=0;i<=grid_width;i++){
        for (let j=0; j<=grid_height; j++) {
            dots.push(
                <div className='group'
                data-index={index}
                key={`${i}-${j}`}>
                    <div className='dot-point' data-index={index}/>
                </div>
            );
            index++;     
        }
    }
    return <div 
    style={{gridTemplateColumns:`repeat(${grid_width},1fr)`}}
    className="custom_grid" >
        {dots}</div>
}
export default WaterDropGrid