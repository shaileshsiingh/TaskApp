import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewTaskButton from './components/NewTaskButton';
import { TaskProvider } from './components/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <Header />
        <NewTaskButton />
        <Hero />
      </div>
    </TaskProvider>
  );
};

export default App;
