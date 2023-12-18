import { useEffect, useState } from 'react';
import Home from './Pages/Home';
import EvenOld from './Components/EvenOld';
import Arithmetic from './Components/Arithmetic';
import Hero from './Pages/Hero';
import ChatBox from './Pages/ChatBox';
import About from './Pages/About';
import Skills from './Pages/Skills';
import NewUi from './Pages/NewUi';
import ClassTask from './Pages/ClassTask';
import Test from './Pages/Test';
import FigmaTask from './Pages/FigmaTask';
import axios from 'axios';

function App() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);

  const getDesc = async () => {
    try {
      const desc = await axios.get(
        'http://localhost:5000/api/v1/getDescription',
      );

      if (desc.status === 201) {
        console.log(desc.data.data[0].descriptionField);
        setDescription(desc.data.data[0].descriptionField);
      }

      // console.log(desc);
    } catch (e) {
      console.log(e);
    }
  };

  const getinfo = async () => {
    try {
      const info = await axios.get('http://localhost:5000/api/v1/getinfo');
      if (info.status === 200) {
        console.log(info?.data?.info);
        setInfo(info?.data?.info);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getDesc();
    getinfo();
    setLoading(false);
  }, []);
  return (
    <>
      {/* <FigmaTask /> */}
      {/* <Test /> */}
      {/* <ClassTask /> */}

      <Home />
      <Hero />
      <About desc={description} info={info} />
      <Skills />
      <ChatBox />
      {/* {/* <Hero />
      // <About />
    */}
      {/* <NewUi /> */}
      {/* <Hero /> */}
      {/* <EvenOld /> */}
      {/* <Arithmetic />
      <ChatBox /> */}
    </>
  );
}

export default App;
