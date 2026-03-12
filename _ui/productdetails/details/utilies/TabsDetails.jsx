"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function TabsDetails() {
    return (
        <div className="w-full text-balance py-clamp-88">
            <Tabs defaultValue="details" className="w-full">

                {/* Tabs */}
                <TabsList className="max-w-[100vw] w-full justify-start bg-transparent p-0 overflow-x-auto flex-nowrap scrollbar-hide">
                    <TabsTrigger
                        value="details"
                        className="
                                bg-transparent
                                data-[state=active]:bg-transparent
                                data-[state=active]:text-gold100
                                border-b
                                border-b-gray400
                                data-[state=active]:border-b-2
                                data-[state=active]:border-gold100
                                rounded-none
                                px-clamp-24 py-clamp-16
                                text-balance
                                "
                    >
                        DETAILS
                    </TabsTrigger>

                    <TabsTrigger
                        value="delivery"
                        className="
                                    bg-transparent
                                    data-[state=active]:bg-transparent
                                    data-[state=active]:text-gold100
                                    border-b
                                    border-b-gray400
                                    data-[state=active]:border-b-2
                                    data-[state=active]:border-gold100
                                    rounded-none
                                    px-clamp-24 py-clamp-16
                                    text-balance
                                    shrink-0
                                    whitespace-nowrap
                                "
                    >
                        DELIVERY
                    </TabsTrigger>

                    <TabsTrigger
                        value="shipping"
                        className="
                                    bg-transparent
                                    data-[state=active]:bg-transparent
                                    data-[state=active]:text-gold100
                                    border-b
                                    border-b-gray400
                                    data-[state=active]:border-b-2
                                    data-[state=active]:border-gold100
                                    rounded-none
                                    px-clamp-24 py-clamp-16
                                    text-balance
                                    shrink-0
                                    whitespace-nowrap
                                "
                    >
                        SHIPPING & RETURN
                    </TabsTrigger>

                    <TabsTrigger
                        value="blueprint"
                        className="
                                    bg-transparent
                                    data-[state=active]:bg-transparent
                                    data-[state=active]:text-gold100
                                    border-b
                                    border-b-gray400
                                    data-[state=active]:border-b-2
                                    data-[state=active]:border-gold100
                                    rounded-none
                                    px-clamp-24 py-clamp-16
                                    text-balance
                                    shrink-0
                                    whitespace-nowrap
                                "
                    >
                        THE BLUEPRINTED
                    </TabsTrigger>
                </TabsList>

                {/* DETAILS */}
                <TabsContent value="details">
                    <div className="flex flex-col gap-clamp-28 pt-clamp-28">
                        <p className="text-clamp-16 text-gray200">
                            Crafted with precision, the Waterdrop Ring embodies minimalist elegance. Its fluid design and radiant finish reflect light with every movement, evoking a sense of serene beauty and understated luxury.
                        </p>
                        <div>
                            <p className="text-gray200 text-clamp-16 mb-clamp-8">Style# 88435R-18RB-DD</p>
                            <ul className="list-disc pl-6 space-y-1 text-clamp-16 text-gray200">
                                <li>18K/750 Gold (Multi-coloured) Diamond Ring</li>
                                <li>Round brilliant diamonds, total carat weight 0.24 ct</li>
                            </ul>
                        </div>
                    </div>
                </TabsContent>

                {/* DELIVERY */}
                <TabsContent value="delivery">
                    <div className="flex flex-col gap-clamp-28 pt-clamp-28">
                        <div>
                            <h6 className="text-balance text-clamp-16 mb-clamp-8">
                                Product Availability
                            </h6>
                            <p className="text-clamp-16 text-gray200">
                                Crafted with precision, the Waterdrop Ring embodies minimalist elegance. Its fluid design and radiant finish reflect light with every movement, evoking a sense of serene beauty and understated luxury.
                            </p>
                        </div>

                        <div>
                            <h6 className="text-balance text-clamp-16 mb-clamp-8">
                                Delivery
                            </h6>
                            <p className="text-clamp-16 text-gray200">
                                Each delivery comes with full insurance coverage. Import duties and taxes, if applicable, are an additional cost payable by you.
                                For more information on delivery and returns, please visit our &nbsp;
                                <Link href={"/"} className="text-clamp-16 text-gold100 underline">
                                    delivery & returns page.
                                </Link>
                            </p>
                        </div>
                    </div>
                </TabsContent>

                {/* SHIPPING */}
                <TabsContent value="shipping">
                    <div className="flex flex-col gap-clamp-28 pt-clamp-28">
                        <h6 className="text-clamp-16 text-light400">
                            Shipping Information
                        </h6>

                        {/* store collection  */}
                        <div className="flex items-center gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-20 h-clamp-20" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.6455 0C16.8722 0 17.9761 0.746766 18.4316 1.88574L19.3262 4.12207C19.8529 5.4392 19.3844 6.94555 18.2041 7.73242L18 7.86816V18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19C0 18.4477 0.447715 18 1 18H2V7.86816L1.7959 7.73242C0.615587 6.94555 0.147135 5.4392 0.673828 4.12207L1.56836 1.88574C2.02395 0.746767 3.12778 0 4.35449 0H15.6455ZM11.6641 8.09277C10.6564 8.76442 9.34355 8.76442 8.33594 8.09277L7 7.20117L5.66406 8.09277C5.16023 8.42861 4.58006 8.59377 4 8.59375V18H7V14C7 12.3431 8.34315 11 10 11C11.6569 11 13 12.3431 13 14V18H16V8.59375C15.4199 8.59377 14.8398 8.42861 14.3359 8.09277L13 7.20117L11.6641 8.09277ZM10 13C9.44771 13 9 13.4477 9 14V18H11V14C11 13.4477 10.5523 13 10 13Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16">In-Store Collection:</h6>
                                <p className="text-gray200 text-clamp-16">Order online, collect in store. Service available in Hong Kong only.</p>
                            </div>
                        </div>

                        {/* Local Delivery  */}
                        <div className="flex items-center gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-20 h-clamp-20" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M12 0C12.5523 0 13 0.447715 13 1V6H17C19.7614 6 22 8.23858 22 11V15C22 16.3544 21.1019 17.4973 19.8691 17.8701C19.7307 18.3277 19.4826 18.7596 19.1211 19.1211C17.9495 20.2927 16.0505 20.2927 14.8789 19.1211C14.552 18.7942 14.3193 18.409 14.1748 18H7.8252C7.68071 18.409 7.44801 18.7942 7.12109 19.1211C5.94952 20.2927 4.05048 20.2927 2.87891 19.1211C2.51738 18.7596 2.2683 18.3278 2.12988 17.8701C0.897596 17.497 0 16.3541 0 15V1C0 0.447715 0.447715 0 1 0H12ZM5.70703 16.293C5.31651 15.9024 4.68349 15.9024 4.29297 16.293C4.09751 16.4884 4 16.7425 4 17C4 17.2575 4.09751 17.5116 4.29297 17.707C4.68349 18.0976 5.31651 18.0976 5.70703 17.707C5.90249 17.5116 6 17.2575 6 17C6 16.7425 5.90249 16.4884 5.70703 16.293ZM17.707 16.293C17.3165 15.9024 16.6835 15.9024 16.293 16.293C16.0975 16.4884 16 16.7425 16 17C16 17.2575 16.0975 17.5116 16.293 17.707C16.6835 18.0976 17.3165 18.0976 17.707 17.707C17.9025 17.5116 18 17.2575 18 17C18 16.7425 17.9025 16.4884 17.707 16.293ZM13 16H14.1748C14.3193 15.591 14.552 15.2058 14.8789 14.8789C16.0505 13.7073 17.9495 13.7073 19.1211 14.8789C19.369 15.1269 19.5611 15.4093 19.7041 15.709C19.8865 15.5278 20 15.2774 20 15V11C20 9.34315 18.6569 8 17 8H13V16Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16">Egypt Local Delivery:</h6>
                                <p className="text-gray200 text-clamp-16">Complimentary delivery within Egypt.</p>
                            </div>
                        </div>

                        {/* International Delivery */}
                        <div className="flex items-center gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-20 h-clamp-20" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path d="M12 0C12.5523 0 13 0.447715 13 1V6H17C19.7614 6 22 8.23858 22 11V15C22 16.3544 21.1019 17.4973 19.8691 17.8701C19.7307 18.3277 19.4826 18.7596 19.1211 19.1211C17.9495 20.2927 16.0505 20.2927 14.8789 19.1211C14.552 18.7942 14.3193 18.409 14.1748 18H7.8252C7.68071 18.409 7.44801 18.7942 7.12109 19.1211C5.94952 20.2927 4.05048 20.2927 2.87891 19.1211C2.51738 18.7596 2.2683 18.3278 2.12988 17.8701C0.897596 17.497 0 16.3541 0 15V1C0 0.447715 0.447715 0 1 0H12ZM5.70703 16.293C5.31651 15.9024 4.68349 15.9024 4.29297 16.293C4.09751 16.4884 4 16.7425 4 17C4 17.2575 4.09751 17.5116 4.29297 17.707C4.68349 18.0976 5.31651 18.0976 5.70703 17.707C5.90249 17.5116 6 17.2575 6 17C6 16.7425 5.90249 16.4884 5.70703 16.293ZM17.707 16.293C17.3165 15.9024 16.6835 15.9024 16.293 16.293C16.0975 16.4884 16 16.7425 16 17C16 17.2575 16.0975 17.5116 16.293 17.707C16.6835 18.0976 17.3165 18.0976 17.707 17.707C17.9025 17.5116 18 17.2775 18 17C18 16.7425 17.9025 16.4884 17.707 16.293ZM13 16H14.1748C14.3193 15.591 14.552 15.2058 14.8789 14.8789C16.0505 13.7073 17.9495 13.7073 19.1211 14.8789C19.369 15.1269 19.5611 15.4093 19.7041 15.709C19.8865 15.5278 20 15.2774 20 15V11C20 9.34315 18.6569 8 17 8H13V16Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16">International Delivery:</h6>
                                <p className="text-gray200 text-clamp-16">Delivery to over 40 destinations. Shipping costs vary.</p>
                            </div>
                        </div>

                        <h6 className="text-clamp-16 text-light400">Return & Exchange:</h6>

                        {/* Return  */}
                        <div className="flex gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-20 h-clamp-20" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10.9998C21.5523 10.9998 22 11.4475 22 11.9998C22 17.5226 17.5228 21.9998 12 21.9998C9.98405 21.9998 8.10917 21.3997 6.53906 20.3738L5.20703 21.7068C4.92103 21.9928 4.49086 22.0784 4.11719 21.9236C3.74359 21.7688 3.5 21.4042 3.5 20.9998V16.9998C3.5 16.4475 3.94772 15.9998 4.5 15.9998H8.5C8.90442 15.9998 9.26902 16.2433 9.42383 16.6169C9.57861 16.9906 9.49303 17.4208 9.20703 17.7068L7.99121 18.9216C9.17037 19.6061 10.5387 19.9998 12 19.9998C16.4183 19.9998 20 16.418 20 11.9998C20 11.4475 20.4477 10.9998 21 10.9998ZM12 1.99976C14.0155 1.99976 15.8901 2.59928 17.46 3.62476L18.793 2.29272C19.079 2.00673 19.5091 1.92115 19.8828 2.07593C20.2564 2.23074 20.5 2.59534 20.5 2.99976V6.99976C20.5 7.55204 20.0523 7.99976 19.5 7.99976H15.5C15.0956 7.99976 14.731 7.75617 14.5762 7.38257C14.4214 7.00889 14.507 6.57872 14.793 6.29272L16.0078 5.0769C14.8289 4.39287 13.4608 3.99976 12 3.99976C7.58172 3.99976 4 7.58148 4 11.9998C4 12.552 3.55228 12.9998 3 12.9998C2.44772 12.9998 2 12.552 2 11.9998C2 6.47691 6.47715 1.99976 12 1.99976Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16">Return Policy:</h6>
                                <p className="text-gray200 text-clamp-16">
                                    If you are not satisfied with your order, please contact us or apply for a full refund up to 30 days from the delivery date.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* BLUEPRINT */}
                <TabsContent value="blueprint">
                    <div className="flex flex-col gap-clamp-28 pt-clamp-28">
                        <h6 className="text-clamp-16 text-light400">The blueprinted</h6>
                        <p className="text-gray200 text-clamp-16">
                            Transform your unique iris into a luxurious work of art. Each piece captures the intricate patterns that make you distinctly you.
                        </p>

                        {/* Capture the Essence */}
                        <div className="flex gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-28 h-clamp-28" width="30" height="27" viewBox="0 0 30 27" fill="none">
                                    <path d="M8.73633 1.92188L8.12695 3.75H3.75C1.68164 3.75 0 5.43164 0 7.5V22.5C0 24.5684 1.68164 26.25 3.75 26.25H26.25C28.3184 26.25 30 24.5684 30 22.5V7.5C30 5.43164 28.3184 3.75 26.25 3.75H21.873L21.2637 1.92188C20.8828 0.773438 19.8105 0 18.5977 0H11.4023C10.1895 0 9.11719 0.773438 8.73633 1.92188ZM15 9.375C16.4918 9.375 17.9226 9.96763 18.9775 11.0225C20.0324 12.0774 20.625 13.5082 20.625 15C20.625 16.4918 20.0324 17.9226 18.9775 18.9775C17.9226 20.0324 16.4918 20.625 15 20.625C13.5082 20.625 12.0774 20.0324 11.0225 18.9775C9.96763 17.9226 9.375 16.4918 9.375 15C9.375 13.5082 9.96763 12.0774 11.0225 11.0225C12.0774 9.96763 13.5082 9.375 15 9.375Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16 mb-clamp-14 leading-[0.7]">Capture the Essence</h6>
                                <p className="text-gray200 text-clamp-16">
                                    Upload your high-resolution iris photograph or schedule a professional session with our certified photographers.
                                </p>
                            </div>
                        </div>

                        {/* Artisan Crafting */}
                        <div className="flex gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-28 h-clamp-28" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M30 15C30 15.0527 30 15.1055 30 15.1582C29.9766 17.2969 28.0312 18.75 25.8926 18.75H20.1562C18.6035 18.75 17.3438 20.0098 17.3438 21.5625C17.3438 21.7617 17.3672 21.9551 17.4023 22.1426C17.5254 22.7402 17.7832 23.3145 18.0352 23.8945C18.3926 24.7031 18.7441 25.5059 18.7441 26.3555C18.7441 28.2188 17.4785 29.9121 15.6152 29.9883C15.4102 29.9941 15.2051 30 14.9941 30C6.71484 30 0 23.2852 0 15C0 6.71484 6.71484 0 15 0C23.2852 0 30 6.71484 30 15ZM7.5 16.875C7.5 16.3777 7.30246 15.9008 6.95083 15.5492C6.59919 15.1975 6.12228 15 5.625 15C5.12772 15 4.65081 15.1975 4.29917 15.5492C3.94754 15.9008 3.75 16.3777 3.75 16.875C3.75 17.3723 3.94754 17.8492 4.29917 18.2008C4.65081 18.5525 5.12772 18.75 5.625 18.75C6.12228 18.75 6.59919 18.5525 6.95083 18.2008C7.30246 17.8492 7.5 17.3723 7.5 16.875ZM7.5 11.25C7.99728 11.25 8.47419 11.0525 8.82582 10.7008C9.17746 10.3492 9.375 9.87228 9.375 9.375C9.375 8.87772 9.17746 8.40081 8.82582 8.04918C8.47419 7.69754 7.99728 7.5 7.5 7.5C7.00272 7.5 6.52581 7.69754 6.17417 8.04918C5.82254 8.40081 5.625 8.87772 5.625 9.375C5.625 9.87228 5.82254 10.3492 6.17417 10.7008C6.52581 11.0525 7.00272 11.25 7.5 11.25ZM16.875 5.625C16.875 5.12772 16.6775 4.65081 16.3258 4.29917C15.9742 3.94754 15.4973 3.75 15 3.75C14.5027 3.75 14.0258 3.94754 13.6742 4.29917C13.3225 4.65081 13.125 5.12772 13.125 5.625C13.125 6.12228 13.3225 6.59919 13.6742 6.95083C14.0258 7.30246 14.5027 7.5 15 7.5C15.4973 7.5 15.9742 7.30246 16.3258 6.95083C16.6775 6.59919 16.875 6.12228 16.875 5.625ZM22.5 11.25C22.9973 11.25 23.4742 11.0525 23.8258 10.7008C24.1775 10.3492 24.375 9.87228 24.375 9.375C24.375 8.87772 24.1775 8.40081 23.8258 8.04918C23.4742 7.69754 22.9973 7.5 22.5 7.5C22.0027 7.5 21.5258 7.69754 21.1742 8.04918C20.8225 8.40081 20.625 8.87772 20.625 9.375C20.625 9.87228 20.8225 10.3492 21.1742 10.7008C21.5258 11.0525 22.0027 11.25 22.5 11.25Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16 mb-clamp-14 leading-[0.7]">Artisan Crafting</h6>
                                <p className="text-gray200 text-clamp-16">
                                    Our master artisans enhance your iris with gold leaf accents and premium mounting options for lasting beauty.
                                </p>
                            </div>
                        </div>

                        {/* Eternal Treasure */}
                        <div className="flex gap-clamp-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-clamp-28 h-clamp-28" width="30" height="27" viewBox="0 0 30 27" fill="none">
                                    <path d="M6.83785 0.574219C7.10152 0.216797 7.5234 0 7.96871 0H22.0312C22.4765 0 22.8984 0.210937 23.1621 0.574219L29.7246 9.48047C30.123 10.0195 30.082 10.7637 29.6367 11.2617L16.0429 26.2617C15.7793 26.5547 15.3984 26.7246 15 26.7246C14.6015 26.7246 14.2265 26.5547 13.957 26.2617L0.363242 11.2617C-0.0879298 10.7637 -0.123086 10.0195 0.275351 9.48047L6.83785 0.574219ZM9.09371 2.90625C8.90035 3.05273 8.84762 3.31641 8.97066 3.52148L12.3339 9.12305L3.70895 9.84375C3.46871 9.86133 3.28121 10.0664 3.28121 10.3125C3.28121 10.5586 3.46871 10.7578 3.70895 10.7812L14.9589 11.7188C14.9824 11.7188 15.0117 11.7188 15.0351 11.7188L26.2851 10.7812C26.5254 10.7637 26.7129 10.5586 26.7129 10.3125C26.7129 10.0664 26.5254 9.86719 26.2851 9.84375L17.666 9.12891L21.0293 3.52734C21.1523 3.32227 21.0996 3.05273 20.9062 2.91211C20.7129 2.77148 20.4433 2.79492 20.2793 2.9707L15 8.68359L9.72066 2.96484C9.5566 2.78906 9.28707 2.76562 9.09371 2.90625Z" fill="#AE7929" />
                                </svg>
                            </div>
                            <div>
                                <h6 className="text-light400 text-clamp-16 mb-clamp-14 leading-[0.7]">Eternal Treasure</h6>
                                <p className="text-gray200 text-clamp-16">
                                    Receive your personalized masterpiece, carefully packaged in our signature luxury presentation box.
                                </p>
                            </div>
                        </div>
                    </div>
                </TabsContent>

            </Tabs>
        </div>
    )
}