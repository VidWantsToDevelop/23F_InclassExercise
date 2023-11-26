import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Container className="p-5 mb-4 bg-light rounded-3">
          <Tabs
              defaultActiveKey="login"
              id="tabs-element"
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <LoginForm />
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                <RegisterForm />
              </Tab>
          </Tabs> 
      </Container>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <ToastContainer />
    </div>
  );
}

export default App;
