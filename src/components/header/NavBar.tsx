import { Link } from 'react-router-dom'
import { useContext, useRef, MouseEvent } from 'react'
import { UserContext } from '../../contexts/User.tsx'
import { isLoggedOut } from '../../utils/isLoggedOut.ts'
import { Avatar } from '../common/Avatar.tsx'

import './NavBar.css'

interface NavBarProps {
	active: boolean
}

export function NavBar({ active }: NavBarProps) {
	const { userLogin, setUserLogin } = useContext(UserContext)

	const reviewsButton = useRef<HTMLAnchorElement>(null)
	const categoriesButton = useRef<HTMLAnchorElement>(null)
	const loginButton = useRef<HTMLAnchorElement>(null)

	function onClick(event: MouseEvent) {
		if (event.target === reviewsButton.current) {
			reviewsButton.current?.focus()
			setTimeout(() => {
				reviewsButton.current?.blur()
			}, 300)
		} else if (event.target === categoriesButton.current) {
			categoriesButton.current?.focus()
			setTimeout(() => {
				categoriesButton.current?.blur()
			}, 300)
		} else if (event.target === loginButton.current) {
			loginButton.current?.focus()
			setTimeout(() => {
				loginButton.current?.blur()
			}, 300)
		}
	}

	function logout() {
		if (setUserLogin) {
			setUserLogin({})
		}
	}

	return (
		<nav className={active ? '' : 'mobile-hide'}>
			<ul>
				<li>
					<Link id='reviews' ref={reviewsButton} to='/reviews' onClick={onClick}>
						Reviews
					</Link>
				</li>
				<li>
					<Link id='categories' ref={categoriesButton} to='/categories' onClick={onClick}>
						Categories
					</Link>
				</li>
				{isLoggedOut(userLogin) ? (
					<li>
						<Link id='login' ref={loginButton} to='/login' onClick={onClick}>
							Login
						</Link>
					</li>
				) : (
					<li id='nav-profile'>
						<div className='grid-user'>
							<h4 className='username'>{userLogin.username}</h4>
							<Avatar avatarUrl={userLogin.avatar_url as string} />
						</div>
						<Link to='/' onClick={logout}>
							Logout
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}
