function App() {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
	  grist.onRecords((records) => setData(records));
	  grist.ready({requiredAccess: 'read table'});
	}, []);

	const listItems = data.map(row =>
	  <li key={row.First_Name}>
	    {row.Callsign}
	  </li>
	);

	return (
		<ul>{listItems}</ul>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
