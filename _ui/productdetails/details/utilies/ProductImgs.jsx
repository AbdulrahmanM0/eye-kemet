function ProductImgs({ images }) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-clamp-24 w-full">
                <div
                    className={`col-span-2 relative`}
                >
                    <img
                        src={images?.image_url}
                        alt={images?.image_url}
                        className="w-full max-w-full h-auto object-cover bg-wd600"
                    />
                </div>
                {images?.additional_images?.length > 0 &&
                    images?.additional_images?.map((item, index) => (
                        <div
                            key={index + item}
                            className={`col-span-1 relative`}
                        >
                            <img
                                src={images?.image_url}
                                alt={item}
                                className="w-full max-w-full h-auto object-cover bg-wd600"
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ProductImgs