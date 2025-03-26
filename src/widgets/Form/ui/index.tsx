import { FormProvider, useForm } from "react-hook-form"
import styles from './styles.module.scss'
import { IProduct } from "../../../store/types/appState";
import { useAppSelector } from "../../../store/store";
import { ButtonSubmit } from "../../../shared/ui/ButtonSubmit";

export const Form = () => {

    const methods = useForm<IProduct>({
        mode: "onChange",
    });

    const listProducts = useAppSelector(s => s.app.products)

    const { register, formState,  } = methods;

    const errors = formState.errors

    return (
        <FormProvider {...methods}>
            <form className={styles.form}>
                <div className={styles.label}>
                    {errors.name&&<p className={styles.error}>{errors.name?.message}</p>}
                    <input 
                        className={styles.input}
                        type="text" 
                        style={{border:`solid 1px ${errors.name?'red':'black'}`}}
                        placeholder="Name Product"
                        {...register('name',{
                            required:{ value: true, message: "Поле обязательно" },
                            maxLength:{ value: 16, message: "Максимальная длина 16 символов" },
                            pattern:{
                                value: /^[А-Яа-яA-Za-z\s]+$/,
                                message:'Недопустимые символы'
                            },
                            validate: (value) =>
                                !listProducts.some((product) => product.name === value) ||
                                "Такое название уже существует",
                        })}
                    />
                </div>
                <div className={styles.label}>
                    {errors.text&&<p className={styles.error}>{errors.text?.message}</p>}
                    <input 
                        className={styles.input}
                        type="text" 
                        style={{border:`solid 1px ${errors.text?'red':'black'}`}}
                        placeholder="Text Product"
                        {...register('text',{
                            required:{ value: true, message: "Поле обязательно" },
                            pattern:{
                                value: /^[А-Яа-яA-Za-z\s]+$/,
                                message:'Недопустимые символы'
                            },
                        })}
                    />
                </div>
                <ButtonSubmit/>
            </form>
        </FormProvider>
    )
}
