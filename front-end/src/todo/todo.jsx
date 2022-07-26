import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

export default props => (
    <div>
        <PageHeader nome='Tarefas' texto="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)

