import React from 'react';
import homePage from '../../assets/homePage.jpg'
import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google'
import {useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import client from '../../client'


const LoginPage = () => {

  const navigate = useNavigate();

	const responseGoogle = (response) => {
		response.googleId = response.sub;
		localStorage.setItem("user", JSON.stringify(response));
		console.log(response);

		const { name, googleId, picture } = response;
		const imageUrl = picture;
		console.log(name, googleId, imageUrl);

		const doc = {
			_id: googleId,
			_type: "user",
			userName: name,
			image: imageUrl,
		};

		client.createIfNotExists(doc).then(() => {
			navigate("/", { replace: true });
		});
	};

  return (

    <div className="flex justify-start items-center flex-col h-screen">
			<div className="relative w-full h-full">
      <img className="w-full h-full object-cover" src={homePage} alt='login-bg'/>
			</div>
			<div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
				<div className="shadow-2xl">
					<GoogleOAuthProvider
						clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
					>
						<GoogleLogin
							onSuccess={(credentialResponse) => {
								responseGoogle(
									jwt_decode(credentialResponse.credential)
								);
							}}
							onError={() => {
								console.log("Login Failed");
							}}
							size='large'
						/>
					</GoogleOAuthProvider>
				</div>
			</div>
		</div>
  )
}

export default LoginPage