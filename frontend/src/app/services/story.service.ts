import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StoryResponse } from "../types/story-response.type";
import { API_URL } from "../app.api";
import { Observable } from "rxjs";

@Injectable({
    providedIn: `root`,
})
export class StoryService {

    constructor(private httpClient: HttpClient) {}

    getStory(id: number) {
        return this.httpClient.get<StoryResponse>(API_URL + `/story/${id}`);
    }
}