import { createAction } from "@reduxjs/toolkit";
import { PaginatedMovie } from "../../models/paginatedMovie.model";

export const addPopular = createAction<PaginatedMovie>("popular/add");
