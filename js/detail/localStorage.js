import { handleSubmit } from "./handleAdd.js";
import { reviewContainer, reviewForm } from "./domElements.js";
import { handleDelete } from "./handleDelete.js";
import { displayAllReviews } from "./displayAllReviews.js";
import { handleEdit } from "./handleEdit.js";

reviewForm.addEventListener("submit", handleSubmit);
reviewContainer.addEventListener("click", handleDelete);
reviewContainer.addEventListener("click", handleEdit);

displayAllReviews();
