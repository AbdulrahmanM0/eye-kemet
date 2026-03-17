import Authintication from '@/components/cards/Authintication'
import Navigation from '@/components/items/navigation/Navigation'
import Form from './utilies/Form'
import AuthBackdrop from '@/components/layout/backdrop/AuthBackdrop'
import Link from 'next/link'

function Otp({ searchParams , data }) {
    return (
        <AuthBackdrop>
            <div className='h-fit my-auto relative z-10'>
                {/* navigation  */}
                <div className='mb-clamp-54'>
                    <Navigation {...data}/>
                </div>
                
                {/* form card  */}
                <div>
                    <Authintication title="OTP Verification " head="Welcome" slogan="We will send you a one time OTP on your phone ">
                        <Link href="#" className="text-light200 underline text-clamp-18 leading-[0.7] mt-clamp-24 inline-block">
                            {
                                searchParams?.phone &&
                                searchParams.phone.slice(0,4) +
                                Array.from({ length: searchParams.phone.length - 4 })
                                    .map(() => "*")
                                    .join("")
                            }
                        </Link>
                        <Form phone={searchParams?.phone}/>
                    </Authintication>
                </div>
            </div>
        </AuthBackdrop>
    )
}

export default Otp