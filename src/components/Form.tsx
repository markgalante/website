import {
  Formik,
  useField,
  ErrorMessage,
  Form as FormikForm,
  type FormikValues,
  type FormikHelpers,
  Field,
  FieldHookConfig,
  FormikConfig,
  useFormikContext,
} from "formik";
import * as React from "react";

import "./Form.style.css";
import { Text } from "./Text";

interface FormProps extends FormikConfig<FormikValues> {
  children: React.ReactNode;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => void | Promise<any>;
}

export function Form({
  children,
  initialValues,
  onSubmit,
  ...props
}: FormProps) {
  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>
  ) => {
    onSubmit(values, formikHelpers);
  };
  return (
    <Formik<FormikValues>
      initialValues={initialValues as FormikValues}
      onSubmit={handleSubmit}
      {...props}
    >
      <FormikForm className="form-container">{children}</FormikForm>
    </Formik>
  );
}

interface CommonInputProps {
  label?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

type GenericInputProps = CommonInputProps & FieldHookConfig<any>;

function generateFormField(
  type: React.HTMLInputTypeAttribute,
  customFormField?: React.ComponentType
) {
  return function GenericFormField({
    label,
    placeholder,
    ...props
  }: GenericInputProps) {
    const [field, meta, helper] = useField(props);
    return (
      <div className="form-field-container">
        <Text.Body>{label}</Text.Body>
        <Field
          type={type}
          {...field}
          {...meta}
          {...helper}
          placeholder={placeholder}
          as={customFormField}
          className="input-field"
        />
        {meta.touched && meta.error ? (
          <ErrorMessage
            name={field.name}
            className="error-message"
            children={generateErrorMessage}
          />
        ) : null}
      </div>
    );
  };
}

function generateErrorMessage(errorMessage: string) {
  return <p className="error-message">{errorMessage}</p>;
}

function TextAreaField(props: any) {
  return <textarea {...props} rows={5} />;
}

export const InputField = {
  Email: generateFormField("email"),
  TextArea: generateFormField("text", TextAreaField),
};

interface SubmitButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export function SubmitButton(props: SubmitButtonProps) {
  const { isValid, isValidating } = useFormikContext();
  console.log({ isValid, isValidating });
  return (
    <div>
      <input
        type="submit"
        {...props}
        className={`submit-button-base ${
          isValid ? "submit-button" : "disabled"
        }`}
        disabled={isValid}
      />
    </div>
  );
}
