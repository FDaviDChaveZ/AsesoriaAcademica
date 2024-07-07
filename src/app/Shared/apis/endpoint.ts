import { HttpHeaders } from "@angular/common/http"

export const endpoint = {

    LIST_SOLICITUDE:"Solicitude/GetSolicitudeByTeacherId"
};

export const httpOptions={
    headers: new HttpHeaders({
        'Content-Type':'appliaction/json'
    }),
};