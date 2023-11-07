import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

function Users() {
    const [user, setUsers] = useState<User>()

    const login = () => {
        setUsers({
            uid: "sadasd",
            name: "Enmanuel"
        })
     }

    return (
        <div>
            <h2>Usuarios: UseState</h2>
            <button
                onClick={login}
                className="ml-8 pl-3 pr-5 bg-white rounded-md">
                Login
            </button>
            {user?  <pre>{JSON.stringify(user)}</pre>: <h1>No hay usuarios</h1> }
      </div>
  )
}

export default Users