import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicSchema } from './ZodSchema';

const ReactHookForm = () => {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      email: "default@gmail.com",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(basicSchema), 
    mode: 'onBlur'
  });

  const handleSubmitForm = (e) => {
    console.log("Form submit");
    // reset();
    //console.log(email, password, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div>
        <input
          {...register("email", {
            required: "Field is required",
          })}
          type="email"
          placeholder="Enter email"
        />
        {formState.errors.email && (
          <p className="error-message">{formState.errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("password", {
            required: "Field is required",
            // minLength: {
            //   value: 10,
            //   message: "Пароль має бути більше 10 символів",
            // },
            // maxLength: {
            //   value: 15,
            //   message: "Пароль має бути менше 10 символів",
            // },
          })}
          type="password"
          placeholder="Enter password"
        />
        {formState.errors.password && (
          <p className="error-message">{formState.errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("confirmPassword", {
            required: "Field is required",
            // validate: (value) =>
            //   value === getValues("password") || "Паролі мають співпадати",
          })}
          type="password"
          placeholder="Enter confirm password"
        />
        {formState.errors.confirmPassword && (
          <p className="error-message">
            {formState.errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button type="submit" disabled={!formState.isValid}>Submit</button>
    </form>
  );
};
export default ReactHookForm;
