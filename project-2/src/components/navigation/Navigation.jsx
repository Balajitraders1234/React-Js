import style from './Navigation.module.css';
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container `}>
      <h1>Bala Ji Traders</h1>
      
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation