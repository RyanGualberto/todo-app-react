import React, { Component } from "react";
import PageHeader from "../template/pageHeader";

export default class Todo extends Component {
    render(){
        return (
            <div>
                <PageHeader nome='Tarefas' texto="Cadastro"></PageHeader>
            </div>
        )
    }
}