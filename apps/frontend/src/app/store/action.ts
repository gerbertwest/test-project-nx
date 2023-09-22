import { createAction } from "@reduxjs/toolkit";

export const loadData = createAction<{message: string}>('main/loadData')
