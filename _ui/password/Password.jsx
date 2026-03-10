import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'

function Password() {
    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation />
                </div>
                {/* form card  */}
                <div>
                    <Authintication title="Forgot password" head="Welcome" slogan="We will send you an email to reset your password.">
                        <Form />
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop >
    )
}

export default Password