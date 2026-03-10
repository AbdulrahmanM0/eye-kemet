import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'

function Singin() {
    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation />
                </div>
                {/* form card  */}
                <div>
                    <Authintication title="Sign In to your Account" head="Welcome back" slogan="If you have an account, sign in with your email address.">
                        <Form />
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop >
    )
}

export default Singin