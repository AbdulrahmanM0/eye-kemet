import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'

function Signup() {
    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation />
                </div>
                {/* form card  */}
                <div>
                    <Authintication title="Create an Account" head="Welcome" slogan="Enter your personal information">
                        <Form />
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop>
    )
}

export default Signup