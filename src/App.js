import React from 'react';
import MainView from './components/mainView';
import AddMonsterView from './components/addMonsterView';

import { Switch, Route } from 'react-router-dom';

function App() {
  document.title = "幽港迷城怪物生命帮助工具"

  return (
    <Switch>
      <Route path="/add" component={AddMonsterView} />
      <Route path="/" match="exact" component={MainView} />
    </Switch>
  );
}

export default App;
