import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            slug: '',
            status: '',
            type: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { slug, status, type } = this.state; 

        return (
            <div class="row">
            <div class="col-md-8">
            <form onSubmit={this.onFormSubmit} class="form-horizontal">
                <div class="form-group">
                    <label class="col-sm-2 control-label">Slug</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" name="slug" value={slug} onChange={this.handleChange} />
                    </div>
                </div>
                <div class="form-group">
                    <label  class="col-sm-2 control-label">Status</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" name="status" value={status} onChange={this.handleChange} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label">Type</label>
                    <div class="col-sm-6">
                      <input type="text" class="form-control" name="type" value={type} onChange={this.handleChange} />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
        </div>

        );
    }
}

export default Form;
