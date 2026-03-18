import { singleProduct } from "@/data/products"
function ProductImgs({images}) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-clamp-24 w-full">
                {singleProduct.imgs.map((item, index) => (
                    <div
                        key={index + item}
                        className={` ${index === 0 ? "col-span-2" : "col-span-1"} relative`}
                    >
                        <img
                            src={ images?.image_url|| `/images/products/details/${item}`}
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