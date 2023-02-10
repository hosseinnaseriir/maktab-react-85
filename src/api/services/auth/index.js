import { INSTANCE } from "@/api"

export const registerService = (data) => {
    return INSTANCE.post("/register", data)
}

export const loginService = (data) => {
    return INSTANCE.post("/login", data)
}