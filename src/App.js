import React from 'react'
import AddIdeas from './components/AddIdeas';
import IdeaList from './components/IdeaList';
import IdeaContextProvider from './Context/Context'
import "./index.css";

function App() {



  return (<IdeaContextProvider>
    <div className="App">
      <AddIdeas />
      <IdeaList />
    </div>
  </IdeaContextProvider>
  );
}

export default App;
