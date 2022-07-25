import React from "react";
import Grid from "../template/grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription } from "./todoActions";
import IconButton from "../template/iconButton";

const TodoForm =  props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione Uma Tarefa"
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}
                    />
            </Grid>
    
            <Grid cols="12 3 2">
                <IconButton 
                    style='primary' 
                    icon="plus"
                    onClick={props.handleAdd}
                />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid  >
        </div>
    )
}

function mapStateToProps(state){
    return {
        description: state.todo.description
    }
}
const mapDispatchToProps = dispatch =>  
    bindActionCreators({
        changeDescription
    }, 
        dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)