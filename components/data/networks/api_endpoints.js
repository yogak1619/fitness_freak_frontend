// #######################
// #   Resource Animations             #
// #######################
//   # GET
const animationsListUrl = ({page, perPage}) =>
  `/animations?page=${page}&per_page=${perPage}`;

//   # GET
const animationDetailUrl = ({id}) => `/animations/${id}`;

// #######################
// #   Resource Users                  #
// #######################
//    # GET
const verifyTokenUrl = () => '/verify-token';

//    # Post
const registerUserUrl = () => '/users';

//    # Post
const userSignInUrl = () => '/login';

//    # Post
const forgetPasswordUrl = () => '/forgot-password';

//    # Post
const resetPasswordUrl = () => '/reset-password';

// #######################
// #   Resource Books             #
// #######################
//   # GET
const availableBooksUrl = () => '/books';

const purchasedBooksUrl = () => '/book/purchased';

//   # GET
const bookDetailsUrl = bookId => `/book/${bookId}`;
const bookTotalReviewsAndRatingsUrl = bookId => `/review-count/${bookId}`;
const bookReviewsUrl = bookId => `/reviews/${bookId}`;

//   # POST
const bookReviewAddUrl = () => '/add-review';
const userAddedReviewUrl = () => '/my-review';

// Continue reading books
// GET
const continueReadingBooksListUrl = () => '/reading-book';
const continueReadingBookDetailsUrl = bookId => `/reading-book/${bookId}`;

// POST
const addBookToContinueReadingUrl = () => '/add-reading-book';
const updateBookLanguageToContinueReadingUrl = () => '/update-language';
const updateContinueReadingBookPageUrl = () => '/update-page';

export {
  animationsListUrl,
  animationDetailUrl,
  forgetPasswordUrl,
  registerUserUrl,
  resetPasswordUrl,
  userSignInUrl,
  availableBooksUrl,
  purchasedBooksUrl,
  bookDetailsUrl,
  bookTotalReviewsAndRatingsUrl,
  bookReviewsUrl,
  bookReviewAddUrl,
  continueReadingBooksListUrl,
  addBookToContinueReadingUrl,
  updateContinueReadingBookPageUrl,
  updateBookLanguageToContinueReadingUrl,
  userAddedReviewUrl,
  verifyTokenUrl,
  continueReadingBookDetailsUrl,
};
