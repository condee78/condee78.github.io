import React,{Component} from 'react';

const TableHeader = () =>{
	return (
        <thead>
            <tr>
                <th>Slug</th>
                <th>Status</th>
                <th>Type</th>
                <th>Action</th>
            </tr>
        </thead>
    );

}

const TableBody = props => { 
    const rows = props.postData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.slug}</td>
                <td>{row.status}</td>
                <td>{row.type}</td>
                <td><button class="btn btn-danger" onClick={() => props.removePost(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { postData, removePost } = this.props;

        return (
            <table class="table table-striped table-hover table-condensed" >
                <TableHeader />
                <TableBody postData={postData} removePost={removePost} />
            </table>
        );
    }
}


export default Table;