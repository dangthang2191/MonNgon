import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookMarkType } from "../../src/api/Type";
import storage from "../../src/storage/Storage";
import { STORAGEKEY } from "../../src/constant/constant";

export const getAllBookMark = createAsyncThunk(
    'bookmark/getAll',
    async () => {
        const listBookmark = await storage.load({key:STORAGEKEY.bookmark}) as BookMarkType[]
        return listBookmark
    }
)