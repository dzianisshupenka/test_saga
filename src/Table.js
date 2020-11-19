import React from 'react';
import { useTable } from 'react-table';
import { connect } from 'react-redux';
import { loadData } from './redux/actions';

function Tabble(props) {

  const loadDataHandler = () => props.loadData();
  let data = [];
  if(props.data.resources) {
    data = props.data.resources;
  }
   
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name method',
        accessor: 'name_method'
      },
      {
        Header: 'URL',
        accessor: 'url'
      },
    ],
    []
  );
   
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div>
      <button onClick={loadDataHandler}>Load Data</button>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    )
  }

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = {
  loadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabble);
