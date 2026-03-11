"use client"
function OurLocation() {
    return (
        <section>
            <div className="w-full flex justify-center pt-clamp-48">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32973.23372193752!2d31.29558345863397!3d30.11459632771338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1773229071612!5m2!1sar!2seg"
                    className="w-[100vw] h-[clamp(100px,65.93vh,713px)] border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default OurLocation;