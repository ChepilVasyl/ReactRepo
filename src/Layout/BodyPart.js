import React, {useEffect, useState} from 'react';
function BodyComponent()
{
    useEffect(() => {
        // Ваш скрипт, який виконується після завантаження компонента
        document.body.classList.remove('is-preload');
    }, []); // Порожній масив забезпечує виконання тільки після першого рендеру
    return(
        <div id="wrapper">
            <div id="bg"></div>
            <div id="overlay"></div>
            <div id="main">
    <HeaderComponent/>
    <FooterComponent/>
            </div>
        </div>
)
}
function HeaderComponent()
{
    const [value1,setValue] = useState("Пусто")
    const SetHandler = (ev) =>{
        setValue(ev.target.value)
        console.log(ev.target.value);
    };
    return (
        <header id="header">
            <h1>Adam Jensen</h1>
            <input value={value1} onInput={SetHandler} color="black"/>
            <p>Security Chief &nbsp;&bull;&nbsp; Cyborg &nbsp;&bull;&nbsp; Never asked for this</p>
            <nav>
                <ul>
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a>
                    </li>
                    <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </nav>
        </header>
    )
}

function FooterComponent() 
{
    return (
        <footer id="footer">
            <span className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
        </footer>
    )
}

export default BodyComponent