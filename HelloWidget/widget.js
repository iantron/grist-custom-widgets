function Card({row}) {
  return (
    <div className="grist-card">
      {Object.entries(row).map(([key, value]) => (
        <div key={key} className="grist-card-field">
          <span className="grist-card-label">{key}:</span>
          <span className="grist-card-value">{String(value)}</span>
        </div>
      ))}
    </div>
  );
}

function CardGrid({records}) {
  if (!records.length) {
    return <div>No data</div>;
  }
  return (
    <div className="grist-card-grid">
      {records.map((row, i) => <Card key={i} row={row} />)}
    </div>
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
      <CardGrid records={records} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));