import {useNavigate} from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate()

  const OnLogin = () => {
    const navegar = navigate('/marvel', {
      replace: true
    })
    return navegar
  }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center m-3">
                    <h1 style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>
                      Login
                    </h1>
                    <button type="button" class="btn btn-primary text-uppercase fw-semibold mt-5 shadow-lg"
                    onClick={OnLogin}
                    >ingresar a la app</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
