import { NavLink} from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
      <li>
          <NavLink to='/' className={({isActive}) => (isActive ? 'nav-active' : '')}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about' className={({isActive}) => (isActive ? ' nav-active' : '')}>About</NavLink>
        </li>
        <li>
          <NavLink to='/products' className={({isActive}) => (isActive ? 'nav-active' : '')}>Products</NavLink>
        </li>
        <li>
          <NavLink to='/404' className={({isActive}) => (isActive ? 'nav-active' : '')}>404</NavLink>
        </li>
         
      </ul>
    </nav>
  )
}
