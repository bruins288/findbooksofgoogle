export const sortCategory = {
  labelName: "Category:",
  items: [
    { name: "all" },
    { name: "art" },
    { name: "biography" },
    { name: "computers" },
    { name: "history" },
    { name: "medical" },
    { name: "poetry" },
  ],
};
export const sortType = {
  labelName: "Sorting by:",
  items: [{ name: "relevance" }, { name: "newest" }],
};
export const bookStyles = {
  small: {
    size: { width: "100px", height: "150px" },
    bookCard: "bookCard",
    bookCardList: {
      img: "bookCard_img",
      info: "bookCard_info",
      infoList: {
        title: "bookCard_info_title",
        dop: "bookCard_info_dop",
      },
    },
  },
  normal: {
    size: { width: "250px", height: "400px" },
    bookCard: "bookCardLarge",
    bookCardList: {
      img: "bookCardLarge_img",
      info: "bookCardLarge_info",
      infoList: {
        title: "bookCardLarge_info_title",
        dop: "bookCardLarge_info_dop",
        des: "bookCardLarge_info_des",
      },
    },
  },
};
export const enumUrlParams = {
  paramQuery: "q",
  paramCategory: "subject",
  paramOrderBy: "orderBy",
  startIndex: "startIndex",
  maxResults: "maxResults",
};
export const status = {
  WAIT: "wait",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  FINISH: "finish",
};
