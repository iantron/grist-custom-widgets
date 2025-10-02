function RecordsTable({records}) {
  if (!records.length) {
    return <div>No data</div>;
  }
  const columns = Object.keys(records[0]);
  return (
    <table className="grist-table">
      <thead>
        <tr>
          {columns.map(col => <th key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {records.map((row, i) => (
          <tr key={i}>
            {columns.map(col => <td key={col}>{row[col]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [records, setRecords] = React.useState([]);
  React.useEffect(() => {
    grist.onRecords(setRecords);
    grist.ready({requiredAccess: 'read table'});
  }, []);
  return (
    <div>
      <div id="greeting">Hello from Grist Custom Widget!</div>
      <div id="rowCount">Rows: {records.length}</div>
      <RecordsTable records={records} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));