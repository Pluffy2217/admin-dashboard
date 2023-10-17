import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = ({ theme }) => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box className="m-10">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                value={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                value={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                value={values.address2}
                onBlur={handleBlur}
                onChange={handleChange}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
                className="dark:bg-[#2e437475] bg-[#dfe0e0] rounded-sm"
                InputLabelProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
                inputProps={{
                  style: {
                    color: theme === "dark" ? "white" : "",
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
            <Box className="flex justify-end mt-5">
              <Button type="submit" color="secondary" variant="contained">
                <p className="font-bold">Create New User</p>
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
