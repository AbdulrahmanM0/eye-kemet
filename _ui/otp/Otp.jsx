import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'
import Link from 'next/link'

function Otp() {
    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation />
                </div>
                {/* form card  */}
                <div>
                    <Authintication title="OTP Verification " head="Welcome" slogan="We will send you a one time password on this email address ">
                        <Link href="#" className="text-light200 underline text-clamp-18 leading-[0.7] mt-clamp-24 inline-block">
                            exampel@info.com
                        </Link>
                        <Form />
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop>
    )
}

export default Otp