import React, {Component} from "react";
import Grid from "../template/grid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search } from "./todoActions";
import IconButton from "../template/iconButton";

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if(e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render(){
        return (
            <div role='form' className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    type="text" 
                    id="description" 
                    className="form-control" 
                    placeholder="Adicione Uma Tarefa"
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}
                    value={this.props.description}
                    />
            </Grid>
    
            <Grid cols="12 3 2">
                <IconButton 
                    style='primary' 
                    icon="plus"
                    onClick={this.props.handleAdd}
                />
                <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
                <IconButton style="default" icon="close" onClick={this.props.handleClear} />
            </Grid  >
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        description: state.todo.description
    }
}
const mapDispatchToProps = dispatch =>  
    bindActionCreators({
        changeDescription,
        search
    }, 
        dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)