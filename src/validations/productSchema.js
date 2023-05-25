import * as Yup from "yup";

const productSchema = Yup.object().shape({
  Name: Yup.string()
    .required("Dont be silly, you need a name!!!")
    .min(5, "Must be at least 5 chars long")
    .max(50, "50 chars is enough!"),
  Description: Yup.string()
    .required("Dont be silly, you need a description!!!")
    .min(5, "Must be at least 5 chars long")
    .max(50, "50 chars is enough!"),
  ImageName: Yup.string()
    .required("Dont be silly, you need an ImageName!!!")
    .min(5, "Must be at least 5 chars long")
    .max(50, "50 chars is enough!"),
  Rating: Yup.number()
    .required("Dont be silly, you need a Rating!!!")
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5"),
});

export default productSchema;
