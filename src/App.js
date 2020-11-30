import React from 'react';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';

import * as S from './App.styled';

function App() {
  return (
    <S.App>
      <Sidebar />
      <Main />
    </S.App>
  );
}

export default App;
