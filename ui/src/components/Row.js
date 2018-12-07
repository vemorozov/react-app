import React from 'react';

const Row = props => (
    <div className='table-row'>
        {
            // JSON.stringify(props.row);
            // props.row['isFlag'] ? 'true' : 'false'
            Object.keys(props.row).map(key => (
                <button>{typeof props.row[key] === 'object' ?
                    props.row[key]['id'] : typeof props.row[key] === 'boolean' ?
                        props.row[key] ? 'true' : 'false' :
                        props.row[key]
                }
                </button>
            ))
        }
    </div>
);

// const mapStateToProps = (state) => ({
//     rows: state.table.rows,
//     loading: state.table.loading,
//     error: state.table.error
// });


export default Row;