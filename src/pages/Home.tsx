import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if(newTaskTitle!=''){
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      };

      setTasks(oldState=> [...oldState, data]);
    }
    //TODO - add new task if it's not empty
  }

  function handleMarkTaskAsDone(id: number) {

    if(tasks.findIndex(task=> task.id == id)>-1){

      let itens = [...tasks];
      let item = itens.find(task=>task.id == id);

      itens[itens.findIndex(task=>task.id == id)] = {
        id: id,
        title: String(item?.title),
        done: !item?.done
      };

      setTasks(itens);
    }

    //TODO - mark task as done if exists
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => oldTasks.filter(task=> task.id !== id));
    //TODO - remove task from state
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}