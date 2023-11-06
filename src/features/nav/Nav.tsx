const Nav=()=>{
    return (
        <div>
            <ul>
                <li>
                    <a href="#default">Default</a>
                </li>
                <li>
                    <a href="#my">My</a>
                </li>
                <li>
                    <a href="?#auth">UnAuthed</a>
                </li>
                <li>
                    <a href="?authed#auth">Authed</a>
                </li>
                <li>
                    <a href="?#fluent">Fluent(UnAuthed)</a>
                </li>
                <li>
                    <a href="?authed#fluent">Fluent</a>
                </li>
            </ul>
        </div>
    )
}

export default Nav