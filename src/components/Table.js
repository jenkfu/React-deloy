const Head = () => {
    return (
        <thead>
        <tr>
            <th>Nom</th>
            <th>Job</th>
            <th>Email</th>
        </tr>
    </thead>
    )
}
const Body = (props) => {
    const Ligne = props.dataUser.map((Users, index) => {
        return (
            <tr key={index}>
            <td>{Users.name}</td>
            <td>{Users.job}</td>
            <td>{Users.mail}</td>
        </tr>
        );
    });
   return <tbody>{Ligne}</tbody>
}

const Table = (props) => {
    const {dataUser} = props;
        return(
            <table border="1">
                <Head/>
                <Body dataUser={dataUser}/>
            </table>
        )
}

export default Table