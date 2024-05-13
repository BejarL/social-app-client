import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, logoutUser, getCurrentUser } from "../services/auth"

const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCurrentUser().then(setUser).finally(() => setLoading(false))
    }, [])

    function login(credentials) {
        return loginUser(credentials).then(setUser)
    }

    function register(credentials) {
        return registerUser(credentials).then(setUser)
    }

    function logout() {
        return logoutUser().then(() => setUser(null))
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}