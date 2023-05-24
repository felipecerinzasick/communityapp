import React, { useState } from 'react';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import Header from '../components/header';
import Footer from '../components/footer';

const poolData = {
  UserPoolId: 'ca-central-1_bcg1vJujy',
  ClientId: '89258280-638a-4f47-8700-2943efc21188',
};

const userPool = new CognitoUserPool(poolData);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const authenticationDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    const cognitoUser = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        // User session will be stored
        // Redirect to the community page
        window.location.href = '/community';
      },

      onFailure: (err) => {
        console.error(err);
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center p-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-white rounded shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-4 py-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Login</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
