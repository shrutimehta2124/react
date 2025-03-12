import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  content: string;
}

interface ArticleState {
  articles: Article[];
}

const initialState: ArticleState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;
export default articleSlice.reducer;
