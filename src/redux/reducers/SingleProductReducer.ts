import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SingleProductDetails {
  productName: string;
  productImg: string;
}

const initialState = {
  singleProductDetails: {
    productName: "Arnica Pain Relief Massage Oil 100ml",
    productImg:
      "https://s3-alpha-sig.figma.com/img/9aa9/2b9b/300659da897b8b567344fc4336eb46ec?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bn7~PS0DSfOhwp2hsSYIkuYuyx172P0nzYnEDpzxFMaSERVKU~oEaLMYL-JxJ7nfAf5epJPnkcdEg7RROzBGIkVCdiRRfNH4XfKpMqRjzUEVLs3rHMKaJ5Z7qexrxyNY4neUJOhbRQpCLYxq7X-1zr15UCmtjQyPEB6iaWLpEIhT8qSFyxUlkkj9mNn14TNn6KuxaNqYh9Q7Nzv5c97awqvoX0jV989ElzcHXMxOQmQ~01l2PA1GTF5hr1UTQp7j9GPzN5qbzQ6fC7n-hHrfIYOu2pdYqhSA~xXG8XXwzuFFRJPDwNMXEQj0t7lo9DJF04E1WmSIp45l2x583Eybaw__",
  },
};

const SingleProductSlice = createSlice({
  name: "singleProductPage",
  initialState,
  reducers: {
    singleProductReducer: (
      state,
      action: PayloadAction<SingleProductDetails>
    ) => {
      state.singleProductDetails = action.payload;
    },
  },
});

export default SingleProductSlice.reducer;
export const { singleProductReducer } = SingleProductSlice.actions;
