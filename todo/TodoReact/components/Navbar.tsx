import { useState } from 'react';
import '../styles/Navbar.css'

const Navbar = () =>{

    const [mode,setMode] = useState<Number | null>(0);
    
    return(
        <nav>
            <ul className='list-titles'>
                <li className={`all ${mode==0? " selcted":""}`} onClick={()=>setMode(0)}>All</li>
                <li className={`uncomplite ${mode==1? " selcted":""}`} onClick={()=>setMode(1)}>Uncomplite</li>
                <li className={`complited ${mode==2? " selcted":""}`} onClick={()=>setMode(2)}>Complited</li>
            </ul>
        </nav>
    )
}

export default Navbar;