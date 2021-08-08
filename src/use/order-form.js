import { useForm, useField } from "vee-validate";
import * as yup from "yup";

export function useOrderForm(close){
    const { handleSubmit, isSubmitting } = useForm({
        initialValues:{
            status:'active'
        }
    });

    const {
      value: name,
      errorMessage: nameError,
      handleBlur: nameBlur,
    } = useField("name",yup.string().required().trim());

    const {
      value: phone,
      errorMessage: phoneError,
      handleBlur: phoneBlur,
    } = useField("phone",yup.string().required().trim());

      const {
      value: amount,
      errorMessage: amountError,
      handleBlur: amountBlur,
    } = useField("amount",yup.number().typeError('Need number').min(0,'Only > 0').required());

      const {
      value: status,
     } = useField("status");

    const onSubmit = handleSubmit( close );

    return {
      name,
      nameError,
      nameBlur,
      phone,
      phoneError,
      phoneBlur,
      amount,
      amountError,
      amountBlur,
      status,
      onSubmit,
      isSubmitting
    };
}