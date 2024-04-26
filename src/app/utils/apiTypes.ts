import type { UserProfile } from "../about/utils/interfaces";


interface SuccessResponse<T> {
    data : T;
    success : true;
} 

interface ErrorResponse {
    success : false;
    error? : string;
    
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse