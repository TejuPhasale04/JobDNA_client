import React, { useState } from 'react';
import Welcome from './pages/Welcome';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [step, setStep] = useState(1);  // 1: Welcome, 2: Login, 3: Dashboard
  const [user, setUser] = useState(null);

  return (
    <>
      {step === 1 && <Welcome onNext={() => setStep(2)} />}
      {step === 2 && <Login onLoginSuccess={(userData) => {
        setUser(userData);
        setStep(3);
      }} />}
      {step === 3 && <Dashboard user={user} />}
    </>
  );
};

export default App;
