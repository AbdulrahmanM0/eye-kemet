"use client"
import { useSelector } from "react-redux";
import Description from "../Description"
import PaymentSummary from "../PaymentSummary"
import useCheckout from "../hooks/useCheckout";

function FormProvider({ getorders, extraction_id, name, email, phone }) {
    const { cartItems, subTotal, total, discount, cart } = useSelector((state) => state.cartReducer);
    const { onSubmit, register, handleSubmit, errors, isSubmitting, control } = useCheckout({ name, email, phone, extraction_id,cart,cartItems });
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='px-clamp-100 bg-full'>
                <div className='flex flex-wrap gap-clamp-100 justify-center'>
                    {/* cols 1  */}
                    <div className='py-clamp-100 flex-1'>
                        <Description name={name} email={email} phone={phone} cartItems={cartItems} register={register} control={control} errors={errors} />
                    </div>
                    {/* cols 2 */}
                    <div className='py-clamp-100 '>
                        <PaymentSummary disable={isSubmitting} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormProvider