import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Alert from '../components/Alert';
import github from '../assets/github-mark.svg';

export default (): JSX.Element => {
  const clientId = 'Iv1.436c253b7a63f6f4'
  const clientSecret = '71f3cc6d63ba97fad9c2b195a321c5762ede1a9d'
  const redirectUri = `${window.location.origin}/toolkit-test`

  const [error, setError] = useState();
  const didMountRef = useRef(false);

  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  useEffect(() => {
    if (didMountRef.current && code) {
      // fetch(`https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`, {
      fetch(`https://github.com/login/oauth/access_token`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      }).then(res => {
        console.log(res)
      }).catch(err => {
        setError(err.toString())
      });
    }

    return () => {
      didMountRef.current = true
    }
  }, [code])

  return (
    <>
      <a
        className='login-link'
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`}
      >
        <img src={github} alt='github' />
        <span>Вход</span>
      </a>
      {error && <Alert msg={error} type='error' />}
    </>
  )
}
