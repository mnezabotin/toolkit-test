import github from '../assets/github-mark.svg';

export default (): JSX.Element => {
  const clientId = 'dad78eae4ef54ae2b6ab'
  const redirectUri = 'http://127.0.0.1:5173/'

  return (
    <a
      className='login-link'
      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`}
    >
      <img src={github} alt='github' />
      <span>Вход</span>
    </a>
  )
}
