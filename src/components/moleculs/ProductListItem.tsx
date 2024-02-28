import Image from "next/image";
import type{ IProduct} from '@/types/product'

interface Props {
    product: IProduct
}

export default function ProductListItem(props: Props) {
    const {imageSrc, imageAlt, name, price, slug} = props.product
    return (
        <div  className="group relative">
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image  className="h-full w-full object-cover object-center lg:h-full lg:w-full" src={imageSrc} alt={imageAlt} width={300} height={300} />

            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={`/${slug}`}>
                            <span aria-hidden="true" className="absolute inset-0"/>
                            {name}
                        </a>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
            </div>
        </div>
    );
}
