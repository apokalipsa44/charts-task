import { User } from "./user.model"

export interface UserApiResponse {
    results?: User[],
    info?: {
        seed?: string,
        results?: string,
        page?: string,
        version?: string
    }
}